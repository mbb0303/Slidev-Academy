<script setup lang="ts">
import MbbFrame from '../components/MbbFrame.vue'
</script>

<template>
  <div class="slidev-layout mbb two-cols">
    <MbbFrame>
      <slot />
    </MbbFrame>
  </div>
</template>
