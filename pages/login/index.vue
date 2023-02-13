<template>
  <div class="w-full h-full min-h-[100vh] p-4 flex flex-col items-center justify-center">
    <div class="w-full mt-[-100px]">
      <p class="text-center text-[16px] leading-[24px] font-[700] text-[#000000]">Chat App</p>
    </div>
    <ValidationObserver v-slot="{ invalid, handleSubmit }" class="w-full">
      <form class="w-full h-full mt-4" @submit.prevent="handleSubmit(onSubmitLogin)">
        <div class="w-full">
          <label for="phoneNumber" class="text-[12px] leading-[18px] text-[#000000] font-[700]">Phone Number</label>
          <input 
            id="phoneNumber" 
            type="text" 
            class="mt-1 w-full h-full min-h-[48px] max-h-[48px] border-[1px] border-[#000000] rounded-[10px] flex items-center justify-start px-4 py-2 text-[12px] leading-[18px] text-[#000000] font-[400]"
          />
        </div>
        <div class="w-full mt-2">
          <label for="password" class="text-[12px] leading-[18px] text-[#000000] font-[700]">Password</label>
          <div class="w-full h-full min-h-[48px] max-h-[48px] border-[1px] border-[#000000] rounded-[10px] flex flex-row items-center justify-between overflow-hidden relative">
            <input 
              :type="[passwordVisibility ? 'text' : 'password']"
              class="w-full h-full min-h-[48px] max-h-[48px] outline-none text-[12px] leading-[18px] text-[#000000] font-[400] px-4"
            />
            <button type="button" class="absolute right-4" @click="toggleVisibilityPassword">
              <img v-if="!passwordVisibility" src="~/assets/img/svg/visibility-black-24-outline.svg" alt="Visibility icon" />
              <img v-else src="~/assets/img/svg/visibility-black-off-24-outline.svg" alt="Visibility icon" />
            </button>
          </div>
        </div>
        <div class="mt-4 w-full">
          <button 
            type="submit"
            class="w-full h-full min-h-[48px] max-h-[48px] rounded-[10px] flex items-center justify-center px-4 py-2 bg-[#3C6255] text-center text-[12px] leading-[18px] font-[700] text-[#EAE7B1]"
            :disabled="invalid"
          >Masuk</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  auth: false,
  data() {
    return {
      passwordVisibility: false
    }
  },
  methods: {
    toggleVisibilityPassword() {
      this.passwordVisibility = !this.passwordVisibility
    },  
    onSubmitLogin() {
      console.log('on submit login')
    }
  }
}
</script>
