<template>
  <button type="button" class="w-full h-full min-h-[48px] max-h-[48px] rounded-[10px] flex items-center justify-center px-4 py-2 text-center text-[12px] leading-[18px] font-[700] bg-[#C4C4C4] text-white cursor-not-allowed gap-2">
    <svg class="animate-spin w-full h-full min-w-[17px] max-w-[17px] min-h-[17px] max-h-[17px] text-[#C4C4C4]" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="4" />
      <path class="opacity-75 fill-[#D9D9D9]" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
    <p>Loading...</p>
  </button>
</template>

<script>
export default {
  name: 'ButtonLoader'
}
</script>
