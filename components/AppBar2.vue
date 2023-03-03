<template>
  <div class="w-full h-full bg-[#3C6255] p-4 flex flex-row items-center justify-start gap-4">
    <button type="button" @click="goBack">
      <img src="~/assets/img/svg/arrow-back-green-24-outline.svg" alt="Arrow back icon" />
    </button>
    <div class="w-full flex flex-row items-center justify-start gap-2">
      <div class="w-full h-full min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] rounded-full border-[1px] border-[#EAE7B1]"></div>
      <div>
        <p class="text-[12px] leading-[18px] text-[#EAE7B1] font-[700]">Username / Phone number</p>
        <p>Online</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBar2',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
