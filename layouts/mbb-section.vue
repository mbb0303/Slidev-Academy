<script setup lang="ts">
import MbbFrame from '../components/MbbFrame.vue'
const props = defineProps<{ sectionTitle?: string, sectionSubtitle?: string }>()
</script>

<template>
  <div class="slidev-layout mbb native-page native-section-page">
    <div class="section-block">{{ props.sectionTitle }}</div>
    <div v-if="props.sectionSubtitle" class="section-subtitle">{{ props.sectionSubtitle }}</div>
    <slot />
    <MbbFrame />
  </div>
</template>
