<template>
  <section class="max-w-3xl m-auto p-10 lg:mt-10 text-basic">
    <h1 class="text-basic text-5xl lg:text-[58px]  font-semibold mb-10">{{ data.title }}</h1>
    <ContentDoc class="article prose-basic prose-lg lg:prose-xl" />
  </section>
</template>

<script setup>
  const { path } = useRoute()

  const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
  })
</script>

<style>
  .article ul li, .article ol li{
    list-style-type: disc;
  }
</style>