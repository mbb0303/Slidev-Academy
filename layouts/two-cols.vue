<script setup lang="ts">
import MbbTwoColumn from './mbb-two-column.vue'
</script>

<template>
  <MbbTwoColumn><slot /><template #left><slot name="left" /></template><template #right><slot name="right" /></template></MbbTwoColumn>
</template>
