<template>
  <button type="button" class="w-full p-4 rounded-[10px] border-[1px] border-[#000000] flex flex-row items-start justify-start gap-4 bg-[#FFFFFF] break-all overflow-hidden transition-all ease-linear hover:bg-gray-100" @click="goToChatRoom">
    <div class="w-full h-full min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] rounded-full border-[1px] border-[#000000]">
      <img 
        v-if="photoUrl" 
        :src="photoUrl" 
        :alt="`${username} image`" 
      />
    </div>
    <div class="w-full text-left">
      <p class="text-[12px] text-[#000000] font-[700] leading-[15px] line-clamp-1">{{ username }}</p>
      <p class="mt-1 text-[10px] text-[#000000] font-[400] leading-[12px] line-clamp-1">{{ timestamp }}</p>
      <p class="mt-1 text-[12px] text-[#000000] font-[400] leading-[15px] line-clamp-1">{{ latestMessage }}</p>
    </div>
    <button type="button" class="w-full h-full min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] flex items-center justify-center rounded-full transition-all ease-linear hover:bg-gray-100">
      <img 
        src="~/assets/img/svg/delete-red-24-outline.svg" 
        alt="Delete icon"
        class="w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]" 
      />
    </button>
  </button>
</template>

<script>
export default {
  name: 'CardMessageItem',
  props: {
    photoUrl: {
      type: String,
      required: false,
      default: ''
    },
    username: {
      type: String,
      required: false,
      default: ''
    },
    timestamp: {
      type: String,
      required: false,
      default: ''
    },
    latestMessage: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    goToChatRoom() {
      this.$emit('go-to-chat-room')
    }
  }
}
</script>
