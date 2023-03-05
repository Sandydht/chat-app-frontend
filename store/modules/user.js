import { Actions } from '../types'

const user = {
  namespaced: true,
  actions: {
    async [Actions.User.getUserListPaginate](context, payload) {
      const response = await this.$axios.$get('/user/list-paginate', { payload })
      return response
    }
  }
}

export default user
