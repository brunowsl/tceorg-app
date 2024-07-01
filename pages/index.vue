<script setup lang="ts">
const { $client } = useNuxtApp()

await $client.organograma.createOrganograma.mutate({
  nome: 'teste',
  descricao: 'teste',
})

const { data: organogramas } = await $client.organograma.getAllOrganogramas.useQuery()
</script>

<template>
  <strong v-if="organogramas">{{ organogramas.length }}</strong>
</template>
