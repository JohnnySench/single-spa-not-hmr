<script setup lang="ts">
import {onMounted, onUnmounted} from "vue";

onMounted(() => {
  console.log('micro 1 mounted')
})

onUnmounted(() => {
  console.log('micro 1 unmounted')
})
</script>

<template>
  <h1>Hello from micro !!!21312</h1>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
