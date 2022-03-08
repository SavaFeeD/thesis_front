export default {
  setUserList(state, payload) {
    const df = [];
    payload.rows.forEach((item) => {
      df.push({
        id: item.id,
        email: item.email,
        permission: item.role,
        status: item.status,
      });
    });
    state.adminsList = df;
    state.adminsCount = payload.count;
  },
};
