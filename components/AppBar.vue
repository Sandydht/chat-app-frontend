<template>
  <div class="w-full h-full min-h-[58px] max-h-[58px] bg-[#3C6255] px-4 flex flex-row items-center justify-between gap-4">
    <p class="text-[16px] font-[700] leading-[24px] text-[#EAE7B1]">Chat App</p>
    <button type="button" class="w-full h-full min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] flex items-center justify-center overflow-hidden rounded-full transition-all ease-linear hover:bg-black hover:bg-opacity-50" @click="handleLogout">
      <img 
        src="~/assets/img/svg/logout-green-24-outline.svg" 
        alt="Logout icon" 
        class="w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  methods: {
    async handleLogout() {
      try {
        await this.$auth.logout()
        this.$router.push('/login')
      } catch (error) {
        console.log('error: ', error)
      }
    }
  }
}
</script>
