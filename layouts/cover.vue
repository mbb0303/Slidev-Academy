<script setup lang="ts">
import MbbFrame from '../components/MbbFrame.vue'
</script>

<template>
  <div class="slidev-layout mbb cover">
    <MbbFrame>
      <slot />
    </MbbFrame>
  </div>
</template>
