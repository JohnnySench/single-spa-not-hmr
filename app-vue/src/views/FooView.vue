<script setup lang="ts">
import {computed, inject, onMounted} from "vue";
import {useRouter} from "vue-router";

const cartService = inject('cartService')
const router = useRouter()
onMounted(() => {
  console.log(cartService, ' - cartService')
  console.log(import.meta.env.BASE_URL)
})

const showClass = () => {
  console.log(cartService?.getItems())
}

const fullPath = computed(() => {
  return `${import.meta.env.BASE_URL}other`;
});
</script>

<template>
  <h1>FooView</h1>
  <button @click="cartService?.pushItem({name: 'Hello'})">Add item</button>
  <a href="/other/foo">Go to other mife A</a>
  <button @click="router.push('/')">Go to other mife router</button>
  <RouterLink :to="{path: '/other'}">Go to other mife router link</RouterLink>
  <button @click="showClass">Show class</button>
</template>

<style scoped>

</style>