export default {
  async getSettingInfo({ commit }) {
    const response = await this.$axios.$get('/setting/info');
    commit('setSettingInfo', response.result);
  },
  async changeSettingInfo({ dispatch }, payload) {
    await this.$axios.$post(`/setting/info-${payload.formName}`, payload.value);
    dispatch('getSettingInfo');
  },
  async resetSettingInfo({ dispatch }, payload) {
    await this.$axios.$put(`/setting/reset-${payload.formName}`);
    dispatch('getSettingInfo');
  },
};
