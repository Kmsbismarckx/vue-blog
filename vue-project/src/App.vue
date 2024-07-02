<script setup lang="ts">
import { Navbar } from '@/shared/components/Navbar'
</script>

<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<style>
html {
  background-color: var(--bg);
  color: var(--fg);
  width: 100vw;
}

body {
  min-height: 100vh;
}

#app {
  min-height: 100%;
  height: 100%;
}
</style>
