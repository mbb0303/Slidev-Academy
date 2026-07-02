<script setup lang="ts">
import MbbFrame from '../components/MbbFrame.vue'
import SlideRefs from '../components/SlideRefs.vue'
defineProps<{ contentClass?: string, refs?: string, refKeys?: string | string[] }>()
</script>

<template>
  <div class="slidev-layout mbb native-page">
    <div class="native-content" :class="contentClass">
      <slot />
    </div>
    <SlideRefs :refs="refs" :ref-keys="refKeys" />
    <MbbFrame />
  </div>
</template>
