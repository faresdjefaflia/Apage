<template>
  <section id="faq" class="py-28 scroll-mt-2">
    <div class="container m-auto px-4 max-w-4xl">
      <!-- info for Features -->
      <div class="text-basic text-center">
        <h2 class="font-bold text-4xl lg:text-6xl">{{ realData.SectionOne[0].title }}</h2>
      </div>
      <!-- list Features -->
      <div class="mt-16">
        <ul>
          <li v-for="item in realData.FaqList" :key="item" @click="OpenBox(item)"
            class="border-2 border-basic rounded-md px-4 py-4 lg:py-4 max-h-full mt-6 lg:mb-4">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class="text-basic font-medium flex items-start lg:text-lg select-none">
                <i class="fi fi-br-life-ring text-lg w-[18px] h-[18px] mr-2 mt-1 relative bottom-[2px]"></i>
                {{ item.title }}
              </h3>
              <div>
                <i v-if="!item.isOpen" class="fi fi-rr-plus-small text-4xl mt-0 w-9 h-9 list-item text-basic"></i>
                <i v-if="item.isOpen" class="fi fi-rr-minus-small text-4xl mt-0 w-9 h-9 list-item text-basic"></i>
              </div>
            </div>
            <div class="overflow-hidden max-h-0 transition-all duration-300 ml-[26px]"
              :class="{ 'max-h-[500px]': item.isOpen }">
              <p class="text-basic font-extralight text-base mt-1">{{ item.description }}</p>
            </div>
          </li>
        </ul>
        <div>
          <p class="font-extralight text-sm text-center mt-7 lg:text-xl lg:mt-9 text-basic">OR</p>
          <div class="text-center lg:flex lg:items-center lg:justify-center">
            <p class="font-extralight text-sm text-center mt-7 lg:text-lg lg:mr-3 text-basic">Can not find what you are looking for?
            </p>
            <a class="inline-block mt-7 text-basic text-lg border border-basic py-3 px-6 rounded-md hover:bg-basic hover:text-white transition-all"
              :href="`mailto:` + realData.SectionTwo[0].email">Email us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const data = await useAsyncData(() => queryContent('/api/faq').findOne())
const realData = data.data
function OpenBox(item) {
  item.isOpen = !item.isOpen;
}
</script>