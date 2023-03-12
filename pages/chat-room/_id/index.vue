<template>
  <div class="w-full h-full min-h-[100vh]">
    <!-- Message list -->
    <div class="w-full h-full pt-4 px-4 pb-[80px] flex flex-col items-start justify-start gap-4">
      <div 
        v-for="index in 10" 
        :key="index" 
        class="w-full h-full min-h-[100px] max-h-[100px]"
        :class="[index % 2 !== 0 ? 'bg-[#61876E] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]' : 'bg-[#A6BB8D] rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px]']"
      /> 
    </div>
    <!-- End message list -->

    <!-- Floating form message -->
    <div class="fixed left-0 bottom-0 right-0 z-50 w-full max-w-[820px] mx-auto">
      <form class="w-full h-full p-4 bg-white flex flex-row items-center justify-between gap-4" @submit.prevent="onSubmitMessage">
        <input 
          type="text" 
          class="w-full h-full min-h-[48px] max-h-[48px] bg-white border-[1px] border-[#000000] rounded-[10px] p-4 text-[12px] font-normal leading-[18px]" 
          placeholder="Tulis pesan..."
        />
        <button 
          type="submit" 
          class="w-full h-full min-w-[48px] max-w-[48px] min-h-[48px] max-h-[48px] flex items-center justify-center p-4 bg-[#3C6255] rounded-[10px]"
        >
          <img 
            src="~/assets/img/svg/send-green-24-outline.svg" 
            alt="Send icon" 
            class="w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]"
          />
        </button>
      </form>
    </div>
    <!-- End floating form message -->
  </div>
</template>

<script>
export default {
  name: 'ChatRoom',
  layout: 'layout-2',
  methods: {
    onSubmitMessage() {
      console.log('on submit message')
    }
  }
}
</script>
