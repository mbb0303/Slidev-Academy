<script setup lang="ts">
import MbbFrame from '../components/MbbFrame.vue'
import SlideRefs from '../components/SlideRefs.vue'
defineProps<{ contentClass?: string, gridClass?: string, cols?: string, refs?: string, refKeys?: string | string[] }>()
</script>

<template>
  <div class="slidev-layout mbb native-page">
    <div class="native-content native-figure-grid-page" :class="contentClass">
      <slot />
      <div class="native-figure-stack">
        <div class="fig-grid native-figures" :class="[`cols-${cols || '2'}`, gridClass]"><slot name="figures" /></div>
        <div class="native-notes"><slot name="notes" /></div>
      </div>
    </div>
    <SlideRefs :refs="refs" :ref-keys="refKeys" />
    <MbbFrame />
  </div>
</template>
