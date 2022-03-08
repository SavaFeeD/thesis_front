// eslint-disable-next-line func-names
export default async function ({
  app, redirect, store, router,
}) {
  try {
    const access = app.$cookies.get('access');
    const refresh = app.$cookies.get('refresh');
    // const userData = store.getters['user/getUserData'];
    const payload = {
      access,
      refresh,
    };
    if (access && refresh) {
      store.commit('auth/setNewTokens', payload);
      // if (!Object.keys(userData).length) {
      //   await store.dispatch('user/getUserData');
      // }
      return true;
    }
    if (!access || !refresh) {
      return redirect('/login');
    }
    return true;
  } catch (e) {
    console.log(e);
    await store.dispatch('auth/logOut');
    return true;
  }
}
