<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';

const pets = ref([]);
const tutores = ref([]);

//Chamar minha api geral
const API_URL = 'http://localhost:3000';
//Chamar minha api para mostras meus pets e tutores
async function carregarDados() {
  //pets
  const respostasPets = await fetch(`${API_URL}/pets`);
  pets.value = await respostasPets.json();
  //tutores
  const respostasTutores = await fetch(`${API_URL}/tutores`);
  tutores.value = await respostasTutores.json();
  console.log('Pets - ', pets.value);
  console.log('Tutores - ', tutores.value);
}
function nomeDoTutor(tutorId){
  for(const tutor of tutores.value){
    if(tutor.id == tutorId){
      return tutor.nome
    }
    else{
      return 'Opss Tutor não encontrado!'
    }
  }
}
onMounted(carregarDados);
</script>
<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Listagem de Pets</h1>
      <p class="text-body-secondary mb-0">
        Listagem dos Pets cadastrados no sistema.
      </p>
    </header>
    <RouterLink
      class="btn btn-primary"
      :to="{ name: 'novo-pet' }"
    >
      Adicionar Pet
    </RouterLink>
    <table class="table table-striped table-hover">
      <thead>
        <th>id</th>
        <th>nome</th>
        <th>Espécie</th>
        <th>Tutor</th>
      </thead>
      <tbody>
        <tr
          v-for="pet in pets"
          :key="pet.id"
        >
          <td>{{ pet.id }}</td>
          <td>{{ pet.nome }}</td>
          <td>{{ pet.especie }}</td>
          <td>{{ nomeDoTutor(pet.tutorId) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped></style>
