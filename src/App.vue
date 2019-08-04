<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

      <ul class="lista-fotos">

        <li class="lista-fotos-item" v-for="foto of fotos">

          <meu-painel :titulo="foto.titulo">

            <img class="imagem-responsiva" v-bind:src="foto.url" :alt="foto.titulo">
              <!-- dentro do atributo, nao é possível usar a interpolação, entao tem que usar o v-bind. Um atalho para v-bind é usar apenas o : (como em :alt) -->      

          </meu-painel>
       
        </li>

    </ul>
    
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue'

export default {

  components: {
    'meu-painel': Painel
  },

  data() {
    return {
      titulo: 'Alurapic',
      fotos: []
    }
  },

  created(){
    let promise = this.$http.get('http://localhost:3000/v1/fotos');

    promise
      .then(res => res.json()) 
      // res.json também é uma promise
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}
</script>

<style>

  .corpo {
    font-family: Arial, Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .centralizado {
    text-align: center;
  }

  .lista-fotos{
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }

</style>
