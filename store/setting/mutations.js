export default {
  setSettingInfo(state, payload) {
    const data = {};
    payload.forEach((item) => {
      data[item.name] = item.value;
    });
    state.settingInfo = data;
  },
};
