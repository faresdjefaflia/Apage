<template>
  <section class="flex items-center py-10 h-auto lg:py-0">
    <div class="container px-4 m-auto lg:flex lg:items-center lg:justify-center">
      <div class="text-center lg:text-left text-basic my-16 lg:w-2/5">
        <div>
          <h2 class="font-black text-5xl leading-[55px]">INCREASE DISCIPLINE WITH TASKY</h2>
          <p class="mt-2 font-light">Supercharge productivity with our streamlined app for efficient task management</p>
          <div class="mt-4">
            <NuxtLink class="border border-basic py-2 px-6 inline-block bg-basic text-white rounded-md mr-2"
              to="#download">Download</NuxtLink>
            <NuxtLink class="border border-basic py-2 px-6 inline-block rounded-md ml-2" to="#aboutus">About us
            </NuxtLink>
          </div>
        </div>
        <div class="mt-20">
          <img class="w-24 m-auto lg:m-0" src="~assets/img/numdownload.png">
          <p class="text-basic font-light mt-2">More than 10k happy people are using our app</p>
        </div>
      </div>
      <div class="mt-11 lg:mt-0">
        <img class="w-64 m-auto" src="~assets/img/appimg.png">
      </div>
    </div>
  </section>
</template>

<style scoped>
  @media (min-width: 768px){
    section{
      height: calc(100vh - 96px);
    }
  }
</style>