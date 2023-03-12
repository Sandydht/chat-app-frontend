<template>
  <form class="flex flex-row items-center justify-between border-[1px] border-[#000000] px-4 gap-2 rounded-[10px] overflow-hidden" @submit.prevent="onSubmit">
    <img 
      src="~/assets/img/svg/search-black-24-outline.svg" 
      alt="Search icon" 
      class="w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]"
    />
    <input 
      v-model="inputSearch"
      type="search"
      :placeholder="placeholder"
      class="w-full h-full outline-none text-[12px] leading-[15px] font-normal text-[rgba(0,0,0,0.5)] py-4" 
    />
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    inputSearch: {
      get() {
        return this.$props.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('on-submit')
    }
  }
}
</script>
