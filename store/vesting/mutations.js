/* eslint-disable no-param-reassign */

export default {
  addNewVesting(state, payload) {
    state.list = [...state.list, payload];
  },
  editVestingData(state, payload) {
    const index = state.list.findIndex((it) => it.id === payload.id);
    state.list[index] = { ...state.list[index], ...payload };
  },
};
