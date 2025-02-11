<template>
  <section class="max-w-3xl m-auto p-10 lg:mt-10 text-basic">
    <h1 v-if="data" class="text-basic text-5xl lg:text-[58px] font-semibold mb-10">
      {{ data.title }}
    </h1>
    <ContentDoc v-if="data" class="article prose-basic prose-lg lg:prose-xl" />
    <p v-else class="text-red-500">not found data</p>
  </section>
</template>

<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, async () => {
  const content = await queryContent().where({ _path: path }).findOne()
  return content || { title: " not found data " } 
})
</script>

<style>
.article ul li, .article ol li {
  list-style-type: disc;
}
</style>
