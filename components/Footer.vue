<template>
  <footer class="">
    <section class="flex justify-center items-center py-14 bg-basic">
      <div class="text-center w-2/3 lg:w-[450px]">
        <p class="text-white font-extralight text-lg leading-[33px]">{{ realData.SectionOne[0].description }}</p>
        <NuxtLink class="border py-2 px-6 inline-block bg-white text-basic rounded-md mr-2 mt-6" to="/#download">Download</NuxtLink>
      </div>
    </section>
    <section class="bg-basic">
      <section class="flex justify-center items-center container m-auto border-b">
        <div>
          <ul class="flex text-2xl text-white">
            <li v-for="item in realData.socialMedia" :key="item">
              <a :href=item.link>
                <i :class="`h-[30px] block m-6` + ` ` + item.icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="container m-auto">
        <div class="text-center lg:flex justify-between py-[22.5px]">
          <p class="font-extralight text-white">{{ realData.SectionTwo[0].copyright }}</p>
          <NuxtLink class="font-extralight text-white hidden lg:block" to="/article/prifacypolicy">Privacy Policy</NuxtLink>
        </div>
      </section>
    </section>
  </footer>
</template>

<script setup>
  const data = await useAsyncData(() => queryContent('/api/footer').findOne())
  const realData = data.data
</script >