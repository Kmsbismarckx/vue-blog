<script setup lang="ts">
const props = defineProps<{ page: number; pageCount: number }>()
</script>

<template>
  <div class="Row">
    <div v-for="page in pageCount" :key="page">{{ page }}</div>
  </div>
</template>

<style scoped></style>
