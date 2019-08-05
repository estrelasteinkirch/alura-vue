<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
      <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre pelo título da foto">

      <ul class="lista-fotos">

        <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto._id">

          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva v-meu-transform:rotate.animate="90" :url="foto.url" :titulo="foto.titulo"/>
            <meu-botao 
              tipo="botao" 
              rotulo="REMOVER" 
              @botaoAtivado="remove(foto)"
              :confirmacao="true"
              estilo="perigo"/>
          </meu-painel>
       
        </li>
    </ul>
    
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/imagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
// importando FotoService
import FotoService from '../../domain/foto/FotoService';


export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data() {
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: '',
      mensagem: ''
    }
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        // filtra a lista
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        // se o campo estiver vazio, não filtramos, retornamos a lista completa
        return this.fotos;
      }
    }
  },


  methods: {

    remove(foto) {

      this.service
        .apaga(foto._id)
        .then(
          () => {
            let indice = this.fotos.indexOf(foto);
            this.fotos.splice(indice, 1);
            this.mensagem = 'Foto removida com sucesso'
          }, 
          err => {
            this.mensagem = 'Não foi possível remover a foto';
            console.log(err);
          }
        )
    }
  },

  created() {

    // criando uma instância do nosso serviço que depende de $resource
    this.service = new FotoService(this.$resource);

    this.service
      .lista()
      .then(fotos => this.fotos = fotos, err => console.log(err));
    }
}

/*
  created(){

    this.resource = this.$resource('v1/fotos{/id}');

    this.resource
      .query()
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));

    
    this.$http
      .get('v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
      

    let promise = this.$http.get('v1/fotos');

    promise
      .then(res => res.json()) 
      // res.json também é uma promise
      .then(fotos => this.fotos = fotos, err => console.log(err));
    
  }
}*/

</script>

<style>
  .centralizado {
    text-align: center;
  }

  .lista-fotos{
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }

</style>
