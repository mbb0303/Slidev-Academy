<script setup lang="ts">
import { useNav } from '@slidev/client'

const { currentPage, total } = useNav()
</script>

<template>
  <slot />
  <div class="mbb-page-number">
    {{ currentPage }}/{{ total }}
  </div>
</template>
