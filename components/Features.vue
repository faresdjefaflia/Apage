<template>
  <section id="features" class="py-28 scroll-mt-2">
    <div class="container m-auto px-4">
      <!-- info for Features -->
      <div class="text-basic text-center">
        <h2 class="font-bold text-4xl lg:text-6xl">{{ realData.SectionOne[0].title }}</h2>
        <p class="font-extralight text-sm mt-3 lg:text-lg lg:w-1/2 lg:mt-4 lg:m-auto"> {{ realData.SectionOne[0].description }}</p>
      </div>
      <!-- list Features -->
      <div class="lg:mt-6">
        <ul class="lg:grid lg:grid-cols-2 lg:gap-6">
          <li v-for="item in realData.FeaturesList" :key="item"
            class="border border-basic rounded-md px-5 py-[18px] max-h-full mt-6 lg:mt-0">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class="text-basic font-medium flex items-center text-lg">
                <i :class="item.icon + ` ` + `text-lg w-[18px] h-[18px] mr-2 relative bottom-[2px]`"></i>
                {{ item.title }}
              </h3>
            </div>
            <div class="ml-[26px] mt-[2px]">
              <p class="text-basic font-extralight text-base">{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
  const data = await useAsyncData(() => queryContent('/api/features').findOne())
  const realData = data.data
</script>
