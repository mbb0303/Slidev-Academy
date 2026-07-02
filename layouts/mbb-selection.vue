<script setup lang="ts">
import MbbFrame from '../components/MbbFrame.vue'
import SlideRefs from '../components/SlideRefs.vue'
defineProps<{ contentClass?: string, columnClass?: string, refs?: string, refKeys?: string | string[] }>()
</script>

<template>
  <div class="slidev-layout mbb native-page">
    <div class="native-content native-selection" :class="contentClass">
      <slot />
      <div class="columns native-columns selection-columns" :class="columnClass">
        <div class="col native-left"><slot name="left" /></div>
        <div class="col native-right"><slot name="right" /></div>
      </div>
    </div>
    <SlideRefs :refs="refs" :ref-keys="refKeys" />
    <MbbFrame />
  </div>
</template>
