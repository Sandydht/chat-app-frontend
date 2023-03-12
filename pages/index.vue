<template>
  <div class="w-full h-full">
    <div class="w-full h-auto sticky top-[58px] z-50 bg-white p-4">
      <SearchBar 
        v-model="searchInput"
        placeholder="Search conversation..."
        @on-submit="onSearchChat" 
      />
    </div>
    <div class="w-full h-full flex flex-col items-start justify-start gap-4 pt-[1px] px-4 mb-[82px]">
      <CardMessageItem 
        v-for="(room, index) in chatRoom.docs" 
        :key="index" 
        :username="room && room.username ? room.username : ''" 
        :timestamp="room && room.created_at ? room.created_at : ''" 
        :latest-message="room && room.message ? room.message : ''" 
        @go-to-chat-room="goToChatRoom({ id: room && room._id ? room._id : '' })"
      />
    </div>
    <div class="fixed left-0 bottom-0 right-0 min-w-[320px] max-w-[820px] mx-auto z-50 flex items-end justify-end p-4 pointer-events-none">
      <nuxt-link to="/users" class="w-full h-full min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] rounded-full bg-[#3C6255] flex items-center justify-center pointer-events-auto">
        <img src="~/assets/img/svg/pencil-green-24-outline.svg" alt="Pencil icon" class="w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  auth: true,
  components: {
    SearchBar: () => import('~/components/SearchBar'),
    CardMessageItem: () => import('~/components/CardMessageItem')
  },
  layout: 'layout-1',
  data() {
    return {
      searchInput: '',
      chatRoom: {
        docs: [],
        totalDocs: 0,
        nextPage: null
      },
      meta: {
        limit: 10,
        page: 1,
        message: ''
      }
    }
  },
  async beforeMount() {
    try {
      await this.getChatRoomListPaginate()
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    ...mapActions({
      paginateListChatRoom: 'ChatRoom/paginateListChatRoom'
    }),
    async getChatRoomListPaginate() {
      try {
        const response = await this.paginateListChatRoom(this.meta)
        if (response && response.status === 'success' && response.result) {
          const result = response.result

          this.chatRoom.docs = result.docs || []
          this.chatRoom.totalDocs = result.totalDocs || 0
          this.chatRoom.nextPage = result.nextPage || null
        }
      } catch (error) {
        console.error(error)
      }
    },
    async onSearchChat() {
      try {
        this.meta.limit = 10
        this.meta.page = 1
        await this.getChatRoomListPaginate()
      } catch (error) {
        console.error(error)
      }
    },
    goToChatRoom({ id }) {
      this.$router.push(`/chat-room/${id}`)
    }
  }
}
</script>
