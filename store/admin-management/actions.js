export default {
  async getAdminsList({ commit }, payload) {
    const config = {
      limit: payload.limit,
      offset: payload.offset,
    };
    const response = await this.$axios.$get('/v1/admins', { params: config });
    commit('setUserList', response.result);
  },
  async changeAdminStatus({ commit, dispatch }, payload) {
    const config = {
      limit: payload.limit,
      offset: payload.offset,
    };
    await this.$axios.$put(`/v1/admins/change-status/${payload.id}/${payload.status}`);
    await dispatch('getAdminsList', config);
  },
};
