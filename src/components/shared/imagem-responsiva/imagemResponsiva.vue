<template>
    <img class="imagem-responsiva" v-bind:src="url" :alt="titulo">
      <!-- dentro do atributo, nao é possível usar a interpolação, entao tem que usar o v-bind. Um atalho para v-bind é usar apenas o : (como em :alt) -->  
</template>

<script>

export default {
    props: ['url', 'titulo']
}

</script>

<style scoped>
  .imagem-responsiva {
      width: 100%;
  }
</style>