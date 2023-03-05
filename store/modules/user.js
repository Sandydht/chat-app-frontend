import { Actions } from '../types'

const user = {
  actions: {
    async [Actions.User.getUserListPaginate](context, payload) {
      const response = await this.$axios.$get('/user/list-paginate')
      return response
    }
  }
}

export default user
