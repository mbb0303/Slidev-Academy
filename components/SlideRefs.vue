<template>
  <div v-if="refsHtml" class="refs" v-html="refsHtml"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import referencesYaml from '../references.yml?raw'
import { formatReferencesHtml, parseReferencesYaml } from '../setup/citation-utils'

const props = defineProps<{
  refs?: string
  refKeys?: string | string[]
}>()

const references = parseReferencesYaml(referencesYaml)
const refsHtml = computed(() => formatReferencesHtml(props.refKeys, references, props.refs))
</script>
