<template>
  <div class="w-full h-full min-h-[100vh] p-4 flex flex-col items-center justify-center">
    <div class="w-full mt-[-100px]">
      <p class="text-center text-[16px] leading-[24px] font-[700] text-[#000000]">Chat App</p>
    </div>
    <ValidationObserver v-slot="{ invalid, handleSubmit }" class="w-full">
      <form class="w-full h-full mt-4" @submit.prevent="handleSubmit(onSubmitRegister)">
        <ValidationProvider v-slot="{ errors, invalid, validated }" vid="username" name="Username" :rules="{ required: true }">
          <div class="w-full">
            <label for="username" class="text-[12px] leading-[18px] text-[#000000] font-[700]">Username</label>
            <input
              id="username"
              v-model="form.username"
              type="text"
              class="mt-1 w-full h-full min-h-[48px] max-h-[48px] border-[1px] rounded-[10px] flex items-center justify-start px-4 py-2 text-[12px] leading-[18px] text-[#000000] font-[400]"
              :class="[invalid && validated ? 'border-red-500' : 'border-[#000000]']"
            />
            <span class="text-[12px] leading-[18px] font-normal text-red-500">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors, invalid, validated }" vid="phoneNumber" name="Phone Number" :rules="{ required: true, numeric: true, phoneNumber: true }">
          <div class="w-full mt-2">
            <label for="phoneNumber" class="text-[12px] leading-[18px] text-[#000000] font-[700]">Phone Number</label>
            <input
              id="phoneNumber"
              v-model="form.phone_number"
              name="phoneNumber"
              type="number"
              class="mt-1 w-full h-full min-h-[48px] max-h-[48px] border-[1px] rounded-[10px] flex items-center justify-start px-4 py-2 text-[12px] leading-[18px] text-[#000000] font-[400]"
              :class="[invalid && validated ? 'border-red-500' : 'border-[#000000]']"
            />
            <span class="text-[12px] leading-[18px] font-normal text-red-500">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors, invalid, validated }" vid="password" name="Password" :rules="{ required: true }">
          <div class="w-full mt-2">
            <label for="password" class="text-[12px] leading-[18px] text-[#000000] font-[700]">Password</label>
            <div
              class="w-full h-full min-h-[48px] max-h-[48px] border-[1px] rounded-[10px] flex flex-row items-center justify-between overflow-hidden relative"
              :class="[invalid && validated ? 'border-red-500' : 'border-[#000000]']"
            >
              <input
                id="password"
                v-model="form.password"
                name="password"
                :type="[passwordVisibility ? 'text' : 'password']"
                class="w-full h-full min-h-[48px] max-h-[48px] outline-none text-[12px] leading-[18px] text-[#000000] font-[400] px-4"
              />
              <button type="button" class="absolute right-4" @click="toggleVisibilityPassword">
                <img v-if="!passwordVisibility" src="~/assets/img/svg/visibility-black-24-outline.svg" alt="Visibility icon" />
                <img v-else src="~/assets/img/svg/visibility-black-off-24-outline.svg" alt="Visibility icon" />
              </button>
            </div>
            <span class="text-[12px] leading-[18px] font-normal text-red-500">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div class="mt-4 w-full">
          <ButtonLoader v-if="buttonLoading" />
          <button
            v-else
            type="submit"
            class="w-full h-full min-h-[48px] max-h-[48px] rounded-[10px] flex items-center justify-center px-4 py-2 text-center text-[12px] leading-[18px] font-[700]"
            :class="[invalid ? 'bg-[#DDDDDD] text-white cursor-not-allowed' : 'bg-[#3C6255] text-[#EAE7B1] cursor-pointer']"
            :disabled="invalid"
          >Register</button>
        </div>
      </form>
    </ValidationObserver>
    <div class="mt-[10px] w-full flex flex-row items-start justify-start">
      <p class="text-[12px] leading-[18px] font-normal text-[#000000]">Already have an account ? <nuxt-link to="/login" class="font-bold transition-all ease-linear hover:border-b-2 hover:border-[#000000]">Login here</nuxt-link></p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RegisterPage',
  components: {
    ButtonLoader: () => import('~/components/ButtonLoader')
  },
  auth: false,
  data() {
    return {
      form: {
        username: '',
        phone_number: '',
        password: ''
      },
      passwordVisibility: false,
      buttonLoading: false
    }
  },
  methods: {
    ...mapActions({
      authenticationRegister: 'Authentication/authenticationRegister'
    }),
    async onSubmitRegister() {
      try {
        this.buttonLoading = true
        const response = await this.authenticationRegister(this.form)
        if (response && response.status === 'success' && response.result && response.token) {
          const user = response.result
          const token = response.token

          await this.$auth.setUserToken(token)
          await this.$auth.setUser(user)
          
          this.resetForm()
          this.$router.push('/')
        }
      } catch (error) {
        console.log('error: ', error)
      } finally {
        this.buttonLoading = false
      }
    },
    toggleVisibilityPassword() {
      this.passwordVisibility = !this.passwordVisibility
    },
    resetForm() {
      this.form.username = ''
      this.form.phone_number = ''
      this.form.password = ''
    }
  }
}
</script>

<style scoped>
input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
}
</style>
