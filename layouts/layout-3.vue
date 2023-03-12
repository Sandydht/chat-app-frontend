<template>
  <div class="w-full h-full min-h-[100vh] max-w-[820px] mx-auto">
    <AppBar3 class="sticky top-0 z-50" @go-back="goBack" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'Layout2',
  components: {
    AppBar3: () => import('~/components/AppBar3')
  },
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>
