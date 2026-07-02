<script setup lang="ts">
import { useNav, useSlideContext } from '@slidev/client'
import { computed } from 'vue'

const { currentPage, total, slides } = useNav()
const { $frontmatter } = useSlideContext()

function sectionFromFrontmatter(frontmatter?: Record<string, any>) {
  const value = frontmatter?.sectionTitle ?? frontmatter?.sectionHeader ?? frontmatter?.section
  return typeof value === 'string' ? value.trim() : ''
}

const sectionHeader = computed(() => {
  if ($frontmatter.hideSectionHeader)
    return ''

  const explicit = sectionFromFrontmatter($frontmatter)
  if (explicit)
    return explicit

  const current = currentPage.value
  let section = ''
  for (const slide of slides.value) {
    if (slide.no > current)
      break
    const candidate = sectionFromFrontmatter(slide.meta?.slide?.frontmatter)
    if (candidate)
      section = candidate
  }
  return section
})

const pageLabel = computed(() => {
  const pageNo = $frontmatter.pageNo ?? currentPage.value
  const totalPages = $frontmatter.totalPages ?? total.value
  return `${pageNo}/${totalPages}`
})
</script>

<template>
  <slot />
  <div v-if="sectionHeader" class="section-header">{{ sectionHeader }}</div>
  <div class="page-number">{{ pageLabel }}</div>
</template>
