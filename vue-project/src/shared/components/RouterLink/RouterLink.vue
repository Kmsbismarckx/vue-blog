<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router'

defineProps<RouterLinkProps>()
</script>

<template>
  <RouterLink class="link Row" :to="$props.to"><slot></slot></RouterLink>
</template>

<style scoped>
.link {
  justify-content: center;
  width: 100px;
  height: 32px;
  background-color: var(--bg);
  border: 1px solid var(--bg);
  color: var(--fg);
  text-decoration: none;
  border-radius: 4px;
  transition:
    background-color 300ms ease-in-out,
    color 300ms ease-in-out,
    border 300ms ease-in-out;
}
.router-link-active {
  background-color: var(--orange);
  border: 1px solid var(--orange);
  color: var(--black);
}
</style>
