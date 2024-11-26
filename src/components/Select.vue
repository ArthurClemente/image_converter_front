<template>
  <div class="select">
    <select @change="changeHandler" :loaded-imagetype=loadedImagetype>
      <option value="">Selecione</option>
      <option :disabled="loadedImagetype == 'image/webp'" value="webp">WEBP</option>
      <option :disabled="loadedImagetype == 'image/png'" value="png">PNG</option>
      <option :disabled="loadedImagetype == 'image/jpeg' || loadedImagetype == 'image/jpg'" value="jpeg">JPEG</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
defineProps<{ loadedImagetype: string | null }>()

function changeHandler (event: Event) {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
}
</script>

<style scoped>
select {
  appearance: none;
  outline: 10px red;
  border: 0;
  box-shadow: none;
  font-family: 'Montserrat', sans-serif;

  font-size: 16px;
  flex: 1;
  padding: 0 1em;
  color: #f7fff7;
  background-color: #023e8a;
  background-image: none;
  cursor: pointer;
}
select::-ms-expand {
  display: none;
}

.select {
  position: relative;
  display: flex;
  width: 16.5em;
  height: 2.5em;
  margin-bottom: 5px;
  border-radius: 24px;
  overflow: hidden;
}
.select::after {
  content: '\25BC';
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: #f7fff7;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 1em;
  background-color: #023e8a;
  transition: .25s all ease;
  pointer-events: none;
}
/* Transition */
.select:hover::after {
  color: #f39c12;
}


</style>