<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Listagem de Pets</h1>
      <p class="text-body-secondary mb-0">Cadastro de Pets no sistema.</p>
    </header>

    <RouterLink
      class="btn btn-primary"
      :to="{ name: 'novo-pet' }"
    >
      Adicionar Pet
    </RouterLink>
  </div>
</template>
<style scoped></style>
