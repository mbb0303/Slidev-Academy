<script setup lang="ts">
import MbbSection from './mbb-section.vue'
defineProps<{ sectionTitle?: string, sectionSubtitle?: string }>()
</script>

<template>
  <MbbSection :section-title="sectionTitle" :section-subtitle="sectionSubtitle"><slot /></MbbSection>
</template>
