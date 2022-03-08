export default {
  setOldTokens(state, { access, refresh, status }) {
    state.tokens.access = access;
    state.tokens.refresh = refresh;
    if (status) state.status = status;
  },
  setNewTokens(state, { access, refresh, status }) {
    state.tokens.access = access;
    state.tokens.refresh = refresh;
    if (status) state.status = status;
  },
  logOut() {
    this.state.tokens.access = '';
    this.state.tokens.refresh = '';
    this.state.status = 0;
  },
  changeUserStatus(state, status) {
    state.status = status;
  },
};
