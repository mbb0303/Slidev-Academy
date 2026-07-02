<script setup lang="ts">
import MbbFrame from '../components/MbbFrame.vue'
</script>

<template>
  <div class="slidev-layout mbb native-page native-thanks-page">
    <div class="thanks-content"><slot /></div>
    <MbbFrame />
  </div>
</template>
