<template>
  <div class="w-full h-full min-w-[320px] max-w-[820px] min-h-[100vh] mx-auto">
    <AppBar class="sticky top-0 z-50" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'Layout1',
  components: {
    AppBar: () => import('~/components/AppBar')
  }
}
</script>
