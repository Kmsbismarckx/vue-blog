<script setup lang="ts">
import { Route } from '@/router/Route'
import { RouterLink } from '@/shared/components/RouterLink'
</script>
<template>
  <div class="Row container">
    <RouterLink :to="Route.HOME.path">Home</RouterLink>
    <RouterLink :to="Route.POSTS.path">Posts</RouterLink>
    <RouterLink :to="Route.USERS.path">Users</RouterLink>
  </div>
</template>
<style scoped>
.container {
  gap: 16px;
  position: sticky;
  top: 0;
  padding: 8px 16px;
  width: 100%;
  background-color: var(--black);
  box-shadow: 0 0 4px var(--purple);
}
</style>
