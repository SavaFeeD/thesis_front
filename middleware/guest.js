// eslint-disable-next-line func-names
export default async function ({
  app, redirect, store,
}) {
  try {
    const access = app.$cookies.get('access');
    const refresh = app.$cookies.get('refresh');

    const payload = {
      access,
      refresh,
    };
    if (access && refresh) {
      store.commit('auth/setNewTokens', payload);
      redirect('/vesting');
    }
    return true;
  } catch (e) {
    console.log(e);
    await store.dispatch('auth/logOut');
    return true;
  }
}
