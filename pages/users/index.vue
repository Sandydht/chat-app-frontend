<template>
  <div class="w-full h-full min-h-[100vh]">
    <div class="w-full h-auto sticky top-[62px] z-50 bg-white p-4">
      <SearchBar 
        placeholder="Search users..."
        @on-submit="onSearchUsers" 
      />
    </div>
    <div class="w-full h-full flex flex-col items-start justify-start gap-4 px-4 pb-4">
      <CardUserItem 
        v-for="(user, index) in userData.docs"
        :key="index"
        :username="user.username"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UsersPage',
  components: {
    SearchBar: () => import('~/components/SearchBar'),
    CardUserItem: () => import('~/components/CardUserItem')
  },
  auth: true,
  layout: 'layout-3',
  data() {
    return {
      userData: {
        docs: [],
        totalDocs: 0,
        nextPage: null
      },
      meta: {
        limit: 10,
        page: 1,
        name: ''
      }
    }
  },
  async beforeMount() {
    try {
      await this.setUserData()
    } catch (error) {
      console.log('error: ', error)
    }
  },
  methods: {
    ...mapActions({
      getUserListPaginate: 'User/getUserListPaginate'
    }),
    async setUserData() {
      try {
        const response = await this.getUserListPaginate(this.meta)
        if (response && response.status === 'success' && response.result) {
          this.fillUserData({ payload: response.result })
        }
      } catch (error) {
        console.log('error: ', error)
      }
    },
    onSearchUsers(payload) {
      console.log('on search user')
    },
    fillUserData({ payload }) {
      this.userData.docs.push(...payload.docs)
      this.userData.totalDocs = payload.totalDocs
      this.userData.nextPage = payload.nextPage
    }
  }
}
</script>
