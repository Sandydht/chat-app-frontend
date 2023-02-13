<template>
  <div class="w-full h-full min-w-[320px] max-w-[820px] min-h-[100vh] mx-auto">
    <AppBar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  components: {
    AppBar: () => import('~/components/AppBar')
  }
}
</script>
