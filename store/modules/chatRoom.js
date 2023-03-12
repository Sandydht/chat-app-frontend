import { Actions } from '../types'

const chatRoom = {
  namespaced: true,
  actions: {
    async [Actions.ChatRoom.paginateListChatRoom](context, payload) {
      const response = await this.$axios.$get('/chat-room/list-paginate', payload)
      return response
    },
    async [Actions.ChatRoom.createChatRoom](context, payload) {
      const response = await this.$axios.$post('/chat-room/create', payload)
      return response
    },
    async [Actions.ChatRoom.deleteChatRoom](context, id) {
      const response = await this.$axios.$delete(`/chat-room/delete/${id}`)
      return response
    }
  }
}

export default chatRoom
