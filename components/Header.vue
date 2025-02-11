<template>
  <header class="border-b border sticky top-0 z-50 bg-white">
    <!-- desktop -->
    <section class="h-24 hidden items-center justify-between container mx-auto px-4 lg:px-0 md:flex">
      <div class="logo">
        <img class="w-16" src="~assets/img/logo.png">
      </div>
      <nav>
        <ul class="flex text-basic font-normal text-lg">
          <li v-for="item in link" :key="item"><NuxtLink class="px-4 py-6 mx-2 hover:font-normal transition-all" :to=item.link>{{item.title}}</NuxtLink></li>
        </ul>
      </nav>
      <NuxtLink class="py-2 px-7 rounded-lg bg-basic font-medium text-lg text-white" to="#download">Download</NuxtLink>
    </section>
    <!-- ------ -->
  
    <!-- phone -->
    <section class="h-24 flex items-center justify-between container mx-auto px-4 lg:px-0 md:hidden">
      <div class="flex justify-between items-center w-full">
        <div class="logo">
          <img class="w-16" src="~assets/img/logo.png">
        </div>
        <div>
          <i @click="Navbar" class="fi fi-br-menu-burger text-4xl w-9 h-9 inline-block text-basic"></i>
        </div>
      </div>
      <div ref="navbar" class="fixed top-24 left-0 right-0 w-full text-center bg-white px-5 overflow-hidden max-h-0 transition-all duration-300">
        <nav>
          <ul class="text-basic font-medium">
            <li v-for="item in link" :key="item"><NuxtLink @click="Navbar" class="inline-block w-full py-6" :to=item.link>{{ item.title }}</NuxtLink></li>
          </ul>
        </nav>
        <NuxtLink  @click="Navbar" class="py-3 px-6 w-full rounded-lg mt-4 inline-block bg-basic text-white" to="/#download">Download</NuxtLink>
      </div>
    </section>
    <!-- ------- -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      link: [
        { title: "Home", link: "/" },
        { title: "About us", link: "/#aboutus" },
        { title: "Features", link: "/#features" },
        { title: "FaQ", link: "/#faq" },
      ]
    }
  },
  methods: {
    Navbar() {
      this.$refs.navbar.classList.toggle("max-h-full")
      this.$refs.navbar.classList.toggle("py-5")
    }
  },
}
</script>