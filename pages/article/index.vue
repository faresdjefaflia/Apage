<script setup>
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
const allPosts = await queryCollection('blog').order('date', 'DESC').all()
console.log(allPosts)
const fooPost = await queryCollection('blog').path('/blog/aboutus').first()
console.log(fooPost)

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <!-- <ContentRenderer v-if="home" :value="home" /> -->
  <!-- <h1>{{allPosts}}</h1> -->
  <!-- <div v-else>Home not found</div> -->
</template>

