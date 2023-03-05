<template>
  <div class="w-full h-full bg-[#3C6255] p-4 flex flex-row items-center justify-start gap-4">
    <nuxt-link :to="backToLink" class="w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]">
      <img 
        src="~/assets/img/svg/arrow-back-green-24-outline.svg" 
        alt="Arrow back icon"
        class="w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]" 
      />
    </nuxt-link>
    <p class="text-[16px] font-[700] leading-[24px] text-[#EAE7B1]">Chat App</p>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  props: {
    backToLink: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>
