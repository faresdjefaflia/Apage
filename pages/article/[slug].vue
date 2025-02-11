<script setup>
const slug = useRoute().params.slug
console.log(slug)
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})
console.log(post)
useSeoMeta({
  title: post.value?.title,
})
</script>

<template>
  <section class="max-w-3xl m-auto p-10 lg:mt-10 text-basic">
    <h1 class="text-basic text-5xl lg:text-[58px] font-semibold mb-10">{{post.title}}</h1>
    <ContentRenderer :value="post" class="article prose-basic prose-lg lg:prose-xl" />
  </section>
</template>


<style>
.article ul li, .article ol li {
  list-style-type: disc;
}
</style>
