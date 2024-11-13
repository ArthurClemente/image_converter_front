<template>
  <main id="mainContent" @dragover.prevent @drop.prevent="dropImageHandler">
    <section id="hederArea">
      <Header />
    </section>
    <section id="imageConverterArea">
      <ImageInput :loadedImage = 'loadedImage' />
    </section>
    <section id="footerArea"></section>
  </main>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import ImageInput from '@/components/ImageInput.vue';

import { ref } from 'vue';

const loadedImage = ref<File | null>(null);

function dropImageHandler(event: DragEvent) {
  // event.preventDefault();

  if(event.dataTransfer?.files.length) {
    loadedImage.value = event.dataTransfer.files[0]
  }
}

</script>


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