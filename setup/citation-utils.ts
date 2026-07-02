export type ReferenceEntry = {
  text: string
  href?: string
}

export type ReferenceMap = Record<string, ReferenceEntry>

export function parseReferencesYaml(raw: string): ReferenceMap {
  const refs: ReferenceMap = {}
  let currentKey = ''

  for (const originalLine of raw.split(/\r?\n/)) {
    const line = originalLine.replace(/\s+#.*$/, '')
    if (!line.trim())
      continue

    const keyMatch = line.match(/^([A-Za-z0-9_.:-]+):\s*$/)
    if (keyMatch) {
      currentKey = keyMatch[1]
      refs[currentKey] = { text: '' }
      continue
    }

    const fieldMatch = line.match(/^\s{2}([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!fieldMatch || !currentKey)
      continue

    const [, field, rawValue] = fieldMatch
    const value = unquoteYamlScalar(rawValue.trim())
    if (field === 'text')
      refs[currentKey].text = value
    else if (field === 'href')
      refs[currentKey].href = value
  }

  return refs
}

export function normalizeRefKeys(input: unknown): string[] {
  if (!input)
    return []
  if (Array.isArray(input))
    return input.map(String).map(s => s.trim()).filter(Boolean)
  return String(input)
    .split(/[,\s]+/)
    .map(s => s.trim())
    .filter(Boolean)
}

export function citationLabelForKey(keys: string[], key: string): string {
  const index = keys.indexOf(key)
  return index >= 0 ? `[${index + 1}]` : '[?]'
}

export function formatReferencesHtml(refKeys: unknown, references: ReferenceMap, fallbackRefs?: string): string {
  const keys = normalizeRefKeys(refKeys)
  if (!keys.length)
    return fallbackRefs ? escapeHtml(fallbackRefs) : ''

  return keys
    .map((key, index) => {
      const entry = references[key]
      const label = `[${index + 1}]`
      if (!entry)
        return `${label} Missing reference: ${escapeHtml(key)}`
      const text = escapeHtml(entry.text)
      if (!entry.href)
        return `${label} ${text}`
      const href = escapeHtml(entry.href)
      return `${label} <a href="${href}" target="_blank" rel="noreferrer">${text}</a>`
    })
    .join('; ')
}

export function renderCitationToken(tokenBody: string, refKeys: unknown, references: ReferenceMap): string {
  const keys = normalizeCitationTokenBody(tokenBody)
  const slideKeys = normalizeRefKeys(refKeys)

  return keys
    .map((key) => {
      const label = citationLabelForKey(slideKeys, key)
      const entry = references[key]
      const title = entry?.text ? ` title="${escapeHtml(entry.text)}"` : ''
      const href = entry?.href ? ` href="${escapeHtml(entry.href)}" target="_blank" rel="noreferrer"` : ''
      return `<sup class="cite"><a${href}${title}>${label}</a></sup>`
    })
    .join('')
}

function normalizeCitationTokenBody(body: string): string[] {
  return body
    .split(',')
    .map(part => part.trim().replace(/^@/, ''))
    .filter(Boolean)
}

function unquoteYamlScalar(value: string): string {
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))
    return value.slice(1, -1)
  return value
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
