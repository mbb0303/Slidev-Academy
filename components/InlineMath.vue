<script setup lang="ts">
import { computed } from 'vue'
import katex from 'katex'

const props = defineProps<{
  tex: string
}>()

const html = computed(() =>
  katex.renderToString(props.tex, {
    displayMode: false,
    throwOnError: false,
    output: 'html',
  }),
)
</script>

<template>
  <span class="math-inline" :data-tex="tex" v-html="html" />
</template>
