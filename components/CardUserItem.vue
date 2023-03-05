<template>
  <div class="w-full p-4 rounded-[10px] border-[1px] border-[#000000] flex flex-row items-start justify-start gap-4 bg-[#FFFFFF] break-all overflow-hidden">
    <div class="w-full h-full min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] rounded-full border-[1px] border-[#000000]">
      <img 
        v-if="photoUrl" 
        :src="photoUrl" 
        :alt="`${username} image`" 
      />
    </div>
    <div class="w-full">
      <p class="text-[12px] text-[#000000] font-[700] leading-[15px] line-clamp-1">{{ username }}</p>
      <p class="text-[12px] text-[#000000] font-[400] leading-[15px] line-clamp-1">{{ status }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardUserItem',
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
    status: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
