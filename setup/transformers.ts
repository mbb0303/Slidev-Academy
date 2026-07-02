import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineMarkdownTransformer, defineTransformersSetup } from '@slidev/types'
import { parseReferencesYaml, renderCitationToken } from './citation-utils'

const referencesPath = fileURLToPath(new URL('../references.yml', import.meta.url))
const references = parseReferencesYaml(readFileSync(referencesPath, 'utf-8'))
const citationTokenPattern = /\[@([A-Za-z0-9_.:-]+(?:\s*,\s*@?[A-Za-z0-9_.:-]+)*)\]/g

const citationTransformer = defineMarkdownTransformer(({ s, slide }) => {
  const content = s.toString()
  const refKeys = slide.frontmatter?.refKeys
  const matches = [...content.matchAll(citationTokenPattern)]

  for (const match of matches.reverse()) {
    if (match.index === undefined)
      continue
    s.overwrite(match.index, match.index + match[0].length, renderCitationToken(match[1], refKeys, references))
  }
})

export default defineTransformersSetup(() => ({
  pre: [citationTransformer],
}))
