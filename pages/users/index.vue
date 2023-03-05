<template>
  <div class="w-full h-full min-h-[100vh]">
    <div class="w-full h-auto sticky top-[56px] z-50 bg-white p-4">
      <SearchBar 
        placeholder="Search users..."
        @on-submit="onSearchUsers" 
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersPage',
  components: {
    SearchBar: () => import('~/components/SearchBar')
  },
  auth: true,
  layout: 'layout-3',
  methods: {
    onSearchUsers() {
      console.log('on search user')
    }
  }
}
</script>
