<script setup lang="ts">
import Header from '@/components/Header.vue';
import ImageInput from '@/components/ImageInput.vue';
</script>

<template>
  <main id="mainContent">
    <section id="hederArea">
      <Header />
    </section>
    <section id="imageConverterArea">
      <ImageInput />
    </section>
    <section id="footerArea"></section>
  </main>
</template>

<style scoped>
  #mainContent {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  #imageConverterArea {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #023e8a;
  }

  .inputZone {
    display: flex;
    flex-direction: column;
  }
</style>