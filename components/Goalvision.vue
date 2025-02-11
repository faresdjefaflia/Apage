<template>
  <section id="aboutus" class="py-28 scroll-mt-2">
    <div class="container m-auto px-4">
      <!-- Goal and vision -->
      <div class="text-basic text-center">
        <h2 class="font-bold text-4xl lg:text-6xl">{{ realData.SectionOne[0].title }}</h2>
        <p class="font-extralight text-sm mt-3 lg:text-lg lg:w-1/2 lg:mt-4 lg:m-auto">{{ realData.SectionOne[0].description }}</p>
      </div>
      <!-- img & List Goal -->
      <div class="lg:flex lg:justify-center lg:mt-7">
        <div class="mt-5 lg:w-1/2 lg:mt-0 lg:mr-3">
          <img class="rounded-md " src="~assets/img/pexels-andrea-piacquadio-3800497.jpg">
        </div>
        <div class="lg:w-1/2">
          <ul>
            <li v-for="item in realData.GoalList" :key="item" @click="OpenBox(item)"
              class="border border-basic rounded-md px-4 py-3 max-h-full mt-4 lg:mt-0 lg:mb-4">
              <div class="flex justify-between items-center cursor-pointer">
                <h3 class="text-basic text-lg font-medium select-none">{{ item.title }}</h3>
                <div>
                  <i v-if="!item.isOpen"
                    class="fi fi-rr-angle-small-down text-3xl mt-0 w-[30px] h-[30px] list-item text-basic"></i>
                  <i v-if="item.isOpen"
                    class="fi fi-rr-angle-small-up text-3xl mt-0 w-[30px] h-[30px] list-item text-basic"></i>
                </div>
              </div>
              <div class="overflow-hidden max-h-0 transition-all duration-300" :class="{ 'max-h-[500px]': item.isOpen }">
                <p class="text-basic font-extralight text-base ml-2 m-1">{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- vision -->
      <div class="font-extralight text-basic text-center mt-5 text-sm lg:text-lg lg:w-1/2 lg:m-auto lg:mt-7">
        <p>{{ realData.SectionTwo[0].vision }}</p>
      </div>
      <div class="text-center mt-10">
        <NuxtLink class="text-basic text-lg border border-basic py-3 px-6 rounded-md hover:bg-basic hover:text-white transition-all"
          to="/article/aboutus">About us</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
  const data = await useAsyncData(() => queryContent('/api/goalvision').findOne())
  const realData = data.data
  function OpenBox(item) {
    item.isOpen = !item.isOpen;
  }
</script>
