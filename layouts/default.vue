<template>
  <div>
    <Header />
    <main>
      <slot />
      <Scroll />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~~/components/Footer.vue';

  const components = {
    Header, 
    Footer
  }
</script>

<style>
  * {
  padding: 0px;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  /* text-align: justify; */
  }

  html {
    scroll-behavior: smooth;
  }

  input:focus {
    outline: none;
  }

  /* SCROLLBAR */
  ::-webkit-scrollbar {
    height:8px;
    width: 6px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #023047;
    border-radius: 2px;
  }

  /* For mozila */
  /* @-moz-document url-prefix() {} */

  /**********************/

  a {
    user-select: none;
  }
  img{
    pointer-events: none;
  }
</style>