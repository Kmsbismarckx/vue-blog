<script setup lang="ts">
import { ref } from 'vue'

type Props = { isActive?: boolean }

const props = defineProps<Props>()

const classes = ref({
  button: true,
  active: props.isActive
})
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  height: 32px;
  min-width: 100px;
  background-color: var(--bg);
  border: 1px solid var(--bg);
  border-radius: 4px;
  color: var(--fg);
  padding: 2px 4px;
  cursor: pointer;
}

.active {
  background-color: var(--orange);
  border: 1px solid var(--orange);
  color: var(--black);
}
</style>
