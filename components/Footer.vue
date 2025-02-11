<template>
  <footer class="">
    <section class="flex justify-center items-center py-14 bg-basic">
      <div class="text-center w-2/3 lg:w-[450px]">
        <p class="text-white font-extralight text-lg leading-[33px]">Experience a unique and effortless way to manage your daily tasks with our innovative task management app.</p>
        <NuxtLink class="border py-2 px-6 inline-block bg-white text-basic rounded-md mr-2 mt-6" to="/#download">Download</NuxtLink>
      </div>
    </section>
    <section class="bg-basic">
      <section class="flex justify-center items-center container m-auto border-b">
        <div>
          <ul class="flex text-2xl text-white">
            <li v-for="item in realData.socialMedia" :key="item.title">
              <a :href="item.link">
                <i :class="`${item.icon} h-[30px] block m-6`"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="container m-auto">
        <div class="text-center lg:flex justify-between py-[22.5px]">
          <p class="font-extralight text-white">Copyright 2023, All Rights Reserved</p>
          <NuxtLink class="font-extralight text-white hidden lg:block" to="/article/privacypolicy">Privacy Policy</NuxtLink>
        </div>
      </section>
    </section>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const realData = ref({
  socialMedia: [
    {
      title: "twitter",
      icon: "fi fi-brands-twitter",
      link: "#"
    },
    {
      title: "facebook",
      icon: "fi fi-brands-facebook",
      link: "#"
    },
    {
      title: "instagram",
      icon: "fi fi-brands-instagram",
      link: "#"
    },
    {
      title: "tiktok",
      icon: "fi fi-brands-tik-tok",
      link: "#"
    }
  ]
});
</script>