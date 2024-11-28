<template>
  <section id="imageInput">
    <div class="inputZone">
      <div class="iconArea">
        <svg fill="#000000" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 384.97 384.97" xml:space="preserve" v-if="!fileLoaded">
          <g>
            <g id="Upload">
              <path
                d="M372.939,264.641c-6.641,0-12.03,5.39-12.03,12.03v84.212H24.061v-84.212c0-6.641-5.39-12.03-12.03-12.03S0,270.031,0,276.671v96.242c0,6.641,5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03v-96.242C384.97,270.019,379.58,264.641,372.939,264.641z" />
              <path
                d="M117.067,103.507l63.46-62.558v235.71c0,6.641,5.438,12.03,12.151,12.03c6.713,0,12.151-5.39,12.151-12.03V40.95l63.46,62.558c4.74,4.704,12.439,4.704,17.179,0c4.74-4.704,4.752-12.319,0-17.011l-84.2-82.997c-4.692-4.656-12.584-4.608-17.191,0L99.888,86.496c-4.752,4.704-4.74,12.319,0,17.011C104.628,108.211,112.327,108.211,117.067,103.507z" />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000" v-else>
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
        </svg>
      </div>
      <div v-show="!fileLoaded">
        <h3 class="inputZoneText">Arraste uma imagem aqui</h3>
        <span class="inputZoneSpan"> ou <span class="browseFilesText" @click="inputClick">procure arquivos </span>do dispositivo</span>
      </div>
      <div v-show="fileLoaded">
        <h3 class="inputZoneText">Arquivo carregado com sucesso</h3>
      </div>
      <input type="file" id="defaultFileInput" @change.prevent="inputChangeHandler"/>
    </div>
    <span class="uploadErrorText" v-show="errorMessage">
      <div class="exclamationMark">
        <svg fill="#BB0000" height="34px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 27.963 27.963" xml:space="preserve">
          <g>
            <g id="c129_exclamation">
              <path d="M13.983,0C6.261,0,0.001,6.259,0.001,13.979c0,7.724,6.26,13.984,13.982,13.984s13.98-6.261,13.98-13.984
                C27.963,6.259,21.705,0,13.983,0z M13.983,26.531c-6.933,0-12.55-5.62-12.55-12.553c0-6.93,5.617-12.548,12.55-12.548
                c6.931,0,12.549,5.618,12.549,12.548C26.531,20.911,20.913,26.531,13.983,26.531z"/>
              <polygon points="15.579,17.158 16.191,4.579 11.804,4.579 12.414,17.158 		"/>
              <path d="M13.998,18.546c-1.471,0-2.5,1.029-2.5,2.526c0,1.443,0.999,2.528,2.444,2.528h0.056c1.499,0,2.469-1.085,2.469-2.528
                C16.441,19.575,15.468,18.546,13.998,18.546z"/>
            </g>
            <g id="Capa_1_207_">
            </g>
          </g>
        </svg>
      </div>
        {{ errorMessage }}
      <div class="cancelAlertButton" @click="closeAlert">
        <svg fill="#BB0000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 512 512" xml:space="preserve">
          <g>
            <g>
              <g>
                <path d="M437.016,74.984c-99.979-99.979-262.075-99.979-362.033,0.002c-99.978,99.978-99.978,262.073,0.004,362.031
                  c99.954,99.978,262.05,99.978,362.029-0.002C536.995,337.059,536.995,174.964,437.016,74.984z M406.848,406.844
                  c-83.318,83.318-218.396,83.318-301.691,0.004c-83.318-83.299-83.318-218.377-0.002-301.693
                  c83.297-83.317,218.375-83.317,301.691,0S490.162,323.549,406.848,406.844z"/>
                <path d="M361.592,150.408c-8.331-8.331-21.839-8.331-30.17,0l-75.425,75.425l-75.425-75.425c-8.331-8.331-21.839-8.331-30.17,0
                  s-8.331,21.839,0,30.17l75.425,75.425L150.43,331.4c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0
                  l75.397-75.397l75.419,75.419c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17l-75.419-75.419l75.425-75.425
                  C369.923,172.247,369.923,158.74,361.592,150.408z"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </span>
    <div class="fileInfoArea" v-show="fileLoaded">
      <div class="fileInfo">
        <svg class="fileIcon" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z" stroke="#f7fff7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="fileName">{{ fileName }}</span>|<span class="fileSize">{{ fileSize }}</span>
        <!-- <div class="progressBar"> </div> -->
      </div>
      <span class="removeFileButton" @click="removeFile">
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#f7fff7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
    <div class="selectArea">
      <span class="selectAreaText">Selecione o formato desejado</span>
      <Select v-model="selectedType" :loaded-imagetype=loadedImageType />
    </div>
    <button type="submit" class="convertButton" @click.prevent="submitConvert"> Converter Imagem </button>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Select from './Select.vue';
import axios from 'axios';

const fileName = ref<string>(''); 
const fileSize = ref<string>('');
const fileLoaded = ref<File | null>(null);
const errorMessage = ref<string>('');
const selectedType = ref<string>('');
const loadedImageType = ref<string>('');

const maxFileSize = 104857600;

const props = defineProps(['loadedImage']);

function inputClick() {
  const fileInput = document.getElementById('defaultFileInput');
  if (fileInput) {
    fileInput.click();
  }
}

function closeAlert() {
  errorMessage.value = '';
}

function validateImage(file: File): Boolean {
  if (file.size > maxFileSize) {
    errorMessage.value = 'O tamanho máximo permitido é de 10MB.';
    return false;
  }

  if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/webp') {
    fileName.value = file.name;
    fileSize.value = `${(file.size / 1024).toFixed(2)} KB`;
    fileLoaded.value = file;
    loadedImageType.value = file.type;
    return true;
  } else {
    errorMessage.value = 'Por favor selecione uma imagem válida: PNG, JPEG, JPG ou WEBP.';
    return false;
  }
}

function inputChangeHandler(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    let file = target.files[0];
    validateImage(file);
  }
}

function removeFile() {
  const fileInfoArea = document.querySelector('.fileInfoArea') as HTMLElement;
  fileName.value = '';
  fileSize.value = '';
  fileLoaded.value = null;
  fileInfoArea.style.display = 'none';
}

function submitConvert() {
  const formData = new FormData();

  if(!fileLoaded.value) {
    errorMessage.value = 'Por favor selecione uma imagem válida.';
    return;
  }
  if(!selectedType.value) {
    errorMessage.value = 'Por favor selecione um formato de imagem.';
    return;
  }

  formData.append('image', fileLoaded.value);
  formData.append('typeToConvert', selectedType.value);

  convertRequest(formData);
}

async function convertRequest(FormData: FormData) {
  try{
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/convert',
      data: FormData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) => {
      console.log(response);
      window.open('http://localhost:8000/api/download/' + response.data.convertedFileName);
    })
  } catch (error) {
    errorMessage.value = 'Erro ao converter imagem.';
    console.error(error);
  }
}

watch(() => props.loadedImage, (newVal) => {
  if (newVal) {
    validateImage(newVal);
  }
});

</script>

<style scoped>
#imageInput {
  background-color: #f7fff7;
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 60px;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 10px 20px, rgba(0, 0, 0, 0.28) 0px 6px 6px;
}
.inputZone {
  border: 2px dashed #023e8a;
  border-radius: 40px;
  margin: 10px 0 15px;
  padding: 30px 50px;
  width: 350px;
  text-align: center;
}
.inputZoneText {
  font-size: 26px;
  margin: 15px 0;
}
.inputZoneSpan {
  font-size: 20px;
}
.browseFilesText {
  color: #023e8a;
  font-weight: bolder;
  cursor: pointer;
}
.browseFiles span {
  position: relative;
  top: -25px;
}
#defaultFileInput {
  display: none;
}
.uploadErrorText {
  background-color: #ffc6c4;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 5px 0;
  padding: 10px 30px;
  border-radius: 5px;
  color: #BB0000;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.cancelAlertButton {
  cursor: pointer;
}
.fileInfoArea {
  color: #f7fff7;
  background-color: #023e8a;
  transition: all 1s;
  width: 390px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 15px;
  padding: 10px 20px;
  border-radius: 25px;
}
.fileInfo > .fileIcon {
  margin-right: 10px;
}
.fileInfo {
  display: flex;
  align-items: center;
  font-size: 15px;
}
.fileName, .fileSize {
  padding: 0 3px;
}
.removeFileButton {
  cursor: pointer;
}
.selectArea {
  display: flex;
  flex-direction: column;
  align-items: left;
}
.selectArea .selectAreaText {
  font-size: 16px;
  margin-left: 8px;
  margin-bottom: 4px;
}
.convertButton {
  background-color: #023e8a;
  color: #f7fff7;
  display: flex;
  align-items: center;
  font-size: 20px;
  border: none;
  border-radius: 20px;
  margin: 10px;
  padding: 8px 50px;
  cursor: pointer;
}
</style>