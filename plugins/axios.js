/* eslint-disable no-param-reassign,consistent-return */
// eslint-disable-next-line func-names
export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    if (store.getters['auth/isAuth']) {
      const urlName = config.url.split('/').pop();
      const token = urlName === 'refresh-token' ? store.getters['auth/refreshToken'] : store.getters['auth/accessToken'];
      config.headers.authorization = `Bearer ${token}`;
    }
  });
  // eslint-disable-next-line no-unused-vars
  $axios.onError(async (error) => {
    console.dir(error);
    const originalRequest = error.config;
    if (error.config.url === 'auth/refresh-token') {
      return;
    } if (error.response.status === 401 && error.response.statusText === 'Token expired') {
      await store.dispatch('auth/refresh-token');
      return $axios(originalRequest);
    }
    if (error.response.data.code === 401002) {
      await store.dispatch('auth/logOut');
    }
    if ((error.response.status === 401 && error.response.statusText !== 'Token expired') || error.response.data.code !== 400010) {
      await store.dispatch('main/showToast', {
        title: '',
        text: error.response.data.message || error.response.data.msg,
      }, { root: true });
    }
    throw error;
  });
}
