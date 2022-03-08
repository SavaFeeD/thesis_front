export default {
  addVesting({ commit, store }, payload) {
    commit('addNewVesting', payload);
  },
  editVesting({ commit }, payload) {
    commit('editVestingData', payload);
  },
};
