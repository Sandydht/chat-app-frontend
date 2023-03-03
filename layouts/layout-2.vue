<template>
  <div class="w-full h-full min-h-[100vh] min-w-[320px] max-w-[820px] mx-auto">
    <AppBar2 class="sticky top-0 z-50" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'Layout2',
  components: {
    AppBar2: () => import('~/components/AppBar2')
  }
}
</script>
