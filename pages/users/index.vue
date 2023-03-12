<template>
  <div class="w-full h-full min-h-[100vh]">
    <div class="w-full h-auto sticky top-[58px] z-50 bg-white p-4">
      <SearchBar 
        v-model="inputSearch"
        placeholder="Search users..."
        @on-submit="onSearchUsers" 
      />
    </div>
    <div class="w-full h-full flex flex-col items-start justify-start gap-4 pt-[1px] px-4 pb-4">
      <CardUserItem 
        v-for="(user, index) in userData.docs"
        :key="index"
        :username="user && user.username ? user.username : ''"
        :status="user && user.status ? user.status : ''"
        @create-chat-room="createNewChatRoom({ recipientId: user && user._id ? user._id : '' })"
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
      inputSearch: '',
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
  computed: {
    userId() {
      let data = ''

      if (this.$auth.user && this.$auth.user._id) {
        data = this.$auth.user._id
      }

      return data
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
      getUserListPaginate: 'User/getUserListPaginate',
      createChatRoom: 'ChatRoom/createChatRoom'
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
    async onSearchUsers() {
      try {
        this.meta.limit = 10
        this.meta.page = 1
        this.meta.name = this.inputSearch
        this.resetUserData()
        await this.setUserData()
      } catch (error) {
        console.log('error: ', error)
      }
    },
    async createNewChatRoom({ recipientId }) {
      try {
        const payload = {
          user_id: this.userId,
          user_recipient_id: recipientId
        }

        const response = await this.createChatRoom(payload)
        if (response && response.status === 'success' && response.result) {
          const _id = response.result && response.result._id ? response.result._id : ''
          this.$router.push(`/chat-room/${_id}`)
        }
      } catch (error) {
        console.error(error)
      }
    },
    fillUserData({ payload }) {
      this.userData.docs.push(...payload.docs)
      this.userData.totalDocs = payload.totalDocs
      this.userData.nextPage = payload.nextPage
    },
    resetUserData() {
      this.userData.docs = []
      this.userData.totalDocs = 0
      this.userData.nextPage = null
    }
  }
}
</script>
