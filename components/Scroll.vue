<template>
  <button class="bg-basic rounded-full w-[50px] h-[50px] fixed bottom-[60px] left-[60px] opacity-0 flex items-center justify-center border border-white" ref="btnscrooll">
    <i class="fi fi-br-chevron-double-up text-white text-xl w-[20px] h-[20px]"></i>
  </button>
</template>

<script>
export default {
  mounted(){
    let btnScrooll = this.$refs.btnscrooll;
    window.addEventListener("scroll", () => {
      if(window.scrollY >= 1000){
        btnScrooll.style.opacity = "1";
      } else{
        btnScrooll.style.opacity = "0";
      }
    });

    btnScrooll.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }
}
</script>