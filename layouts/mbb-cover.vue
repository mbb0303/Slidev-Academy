<script setup lang="ts">
import MbbFrame from '../components/MbbFrame.vue'
const props = defineProps<{ leftLogo?: string, rightLogo?: string, authors?: string, institutions?: string, date?: string }>()
</script>

<template>
  <div class="slidev-layout mbb native-page native-cover-page">
    <div class="cover-logos">
      <slot name="logos">
        <img v-if="props.leftLogo" :src="props.leftLogo" alt="Left logo" />
        <img v-if="props.rightLogo" :src="props.rightLogo" alt="Right logo" />
      </slot>
    </div>
    <div class="native-cover-card">
      <slot />
    </div>
    <p v-if="props.authors" class="authors">{{ props.authors }}</p>
    <p v-if="props.institutions" class="institutions">{{ props.institutions }}</p>
    <p v-if="props.date" class="cover-date">{{ props.date }}</p>
    <MbbFrame />
  </div>
</template>
