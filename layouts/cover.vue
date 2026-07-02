<script setup lang="ts">
import MbbCover from './mbb-cover.vue'
defineProps<{ leftLogo?: string, rightLogo?: string, authors?: string, institutions?: string, date?: string }>()
</script>

<template>
  <MbbCover :left-logo="leftLogo" :right-logo="rightLogo" :authors="authors" :institutions="institutions" :date="date"><slot /><template #logos><slot name="logos" /></template></MbbCover>
</template>
