<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
const router = useRouter(); //chamando o vue router
const tutores = ref([]);
const novoPet = ref({
  nome: '',
  especie: '',
  tutorId: '',
});
const API_URL = 'http://localhost:3000';
//Chamar minha api para mostras meus tutores
async function carregarTutores() {
  //tutores
  const respostasTutores = await fetch(`${API_URL}/tutores`);
  tutores.value = await respostasTutores.json();
  console.log('Tutores - ', tutores.value);
}
console.table(tutores);

async function salvarpet() {
  await fetch(`${API_URL}/pets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novoPet.value),
  });
  //redirecionar para  apágina de listagem de pets
  router.push('/pets');
}

onMounted(carregarTutores);
</script>
<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Adicionar pets</h1>
      <p class="text-body-secondary mb-0">Cadastro de Pets no sistema.</p>
    </header>
    <RouterLink
      class="btn btn-outline-primary"
      to="/pets"
    >Visualizar pets</RouterLink>
    <form
      class="row"
      @submit.prevent="salvarpet"
    >
      <!--Nome-->
      <div class="col-md-6">
        <label
          for="nome"
          class="form-label"
        >
          Nome do Pet:
        </label>
        <input
          class="form-control"
          type="text"
          id="nome"
          v-model="novoPet.nome"
          required
        />
      </div>
      <!--Especie-->
      <div class="col-md-6">
        <label
          for="especie"
          class="form-label"
          >Especíe</label
        >
        <select
          name="especie"
          id="especie"
          class="form-select"
          required
          v-model="novoPet.especie"
        >
          <option
            value=""
            disabled
          >
            Selecione a especíe
          </option>
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
          <option value="Cavalo">Cavalo</option>
        </select>
      </div>
      <!--Tutor-->
      <div class="col-md-6">
        <label
          for="Tutor"
          class="form-label"
          >Tutor</label
        >
        <select
          name="Tutor"
          id="Tutor"
          class="form-select"
          v-model="novoPet.tutorId"
        >
<option disabled>Selecione o Tutor</option>
<option v-for="tutor in tutores" :key="tutor.id" :value="tutor.id">{{tutor.nome}}</option>
      </select>
      </div>
      <div class="col-12 d-flex gap-2">
        <button class="btn btn-success" type="submit">Salvar Pet</button>
      </div>
    </form>
  </div>
</template>
<style scoped></style>
