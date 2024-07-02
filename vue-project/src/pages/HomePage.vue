<script setup lang="ts"></script>

<template>
  <div class="Column page container">
    <h1 class="title">Vue in <span class="Dracula">Dracula</span> colors</h1>
  </div>
</template>

<style scoped>
.container {
  background-image: url('/castle.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}

.Dracula {
  color: var(--pink);
}

.title {
  margin-top: 100px;
  margin-left: 100px;
  font-size: 72px;
}
</style>
