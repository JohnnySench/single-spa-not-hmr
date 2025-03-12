<script setup lang="ts">
import {onMounted, onUnmounted} from "vue";
import {useRouter} from "vue-router";
const props = defineProps<{word: string}>();

onMounted(() => {
  console.log('micro 1 mounted')
})

onUnmounted(() => {
  console.log('micro 1 unmounted')
})

const router = useRouter();
</script>

<template>
  <div>{{word}}</div>
  <h1>Micro 1</h1>
  <div class="buttons">
    <button @click="router.push({name: 'bar'})">Bar View</button>
    <button @click="router.push({name: 'foo'})">Foo View</button>
  </div>
  <RouterView />
</template>

<style scoped>
.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
