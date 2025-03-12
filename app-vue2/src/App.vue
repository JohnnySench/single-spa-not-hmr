<script setup lang="ts">
import {onMounted, onUnmounted} from "vue";
import {useRouter} from "vue-router";


const router = useRouter()
onMounted(() => {
  console.log('micro 2 mounted')
})

onUnmounted(() => {
  console.log('micro 2 unmounted')
})
</script>

<template>
  <h1>Micro 2</h1>
  <div class="buttons">
    <button @click="router.push({name: 'bar'})">Bar View</button>
    <button @click="router.push({name: 'foo'})">Foo View</button>
  </div>
  <RouterView />
</template>

<style scoped>
</style>
