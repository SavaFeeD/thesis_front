export default {
  async login({ dispatch }, payload) {
    const resp = await this.$axios.$post('/admin/login', payload);
    await dispatch('setNewTokens', resp.result);
  },
  logOut() {
    this.$cookies.remove('access');
    this.$cookies.remove('refresh');
  },
  setNewTokens({ commit }, { access, refresh, status }) {
    this.$cookies.set('access', access);
    this.$cookies.set('refresh', refresh);
    if (status) this.$cookies.set('status', status);
    commit('setNewTokens', { access, refresh, status });
  },
  async refreshToken({ dispatch }) {
    const resp = await this.$axios.$post('/auth/refresh-token');
    await dispatch('setNewTokens', resp);
  },
  async invite(_, payload) {
    await this.$axios.$post('/admin/new/email', payload);
  },
};
