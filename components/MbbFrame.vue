<script setup lang="ts">
import { useNav, useSlideContext } from '@slidev/client'
import { computed } from 'vue'

const { currentPage, total, slides } = useNav()
const { $frontmatter } = useSlideContext()

function sectionFromFrontmatter(frontmatter?: Record<string, any>) {
  const value = frontmatter?.sectionTitle
    ?? frontmatter?.sectionHeader
    ?? frontmatter?.section

  return typeof value === 'string' ? value.trim() : ''
}

const sectionHeader = computed(() => {
  if ($frontmatter.hideSectionHeader)
    return ''

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
</script>

<template>
  <slot />
  <div v-if="sectionHeader" class="mbb-section-header">
    {{ sectionHeader }}
  </div>
  <div class="mbb-page-number">
    {{ currentPage }}/{{ total }}
  </div>
</template>
