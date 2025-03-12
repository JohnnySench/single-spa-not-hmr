<script setup lang="ts">
import {inject, onMounted} from "vue";
import {useRouter} from "vue-router";

const cartService = inject('cartService')
const router = useRouter()
onMounted(() => {
  console.log(cartService, ' - cartService')
})

const showClass = () => {
  console.log(cartService?.getItems())
}
</script>

<template>
  <h1>FooView</h1>
  <button @click="cartService?.pushItem({name: 'Hello'})">Add item</button>
  <RouterLink to="/vue/foo">Go to VUE mife</RouterLink>
  <button @click="showClass">Show class</button>
</template>

<style scoped>

</style>