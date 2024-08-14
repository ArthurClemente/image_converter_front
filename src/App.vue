<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
</script>

<template>
  <HomeView />
</template>

<style>
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-Regular.ttf') format('truetype');
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
</style>