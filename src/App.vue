<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

      <ul class="lista-fotos">

        <li class="lista-fotos-item" v-for="foto of fotos">

          <div class="painel">

            <h2 class="painel-titulo">{{ foto.titulo }}</h2>

            <div class="painel-corpo">
              <img class="imagem-responsiva" v-bind:src="foto.url" :alt="foto.titulo">
              <!-- dentro do atributo, nao é possível usar a interpolação, entao tem que usar o v-bind. Um atalho para v-bind é usar apenas o : (como em :alt) -->           
            </div>

          </div>

       
        </li>

    </ul>
    
  </div>
</template>

<script>
export default {
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

  /* estilo do painel */ 

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
  
</style>
