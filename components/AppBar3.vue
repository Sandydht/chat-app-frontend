<template>
  <div class="w-full h-full bg-[#3C6255] p-4 flex flex-row items-center justify-start gap-4">
    <button type="button" class="w-full h-full min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] flex items-center justify-center overflow-hidden rounded-full transition-all ease-linear hover:bg-black hover:bg-opacity-50" @click="goBack">
      <img 
        src="~/assets/img/svg/arrow-back-green-24-outline.svg" 
        alt="Arrow back icon"
        class="w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]" 
      />
    </button>
    <p class="text-[16px] font-[700] leading-[24px] text-[#EAE7B1]">Chat App</p>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  methods: {
    goBack() {
      this.$emit('go-back')
    }
  }
}
</script>
