import Vue from 'vue';
import clickOutside from './directives/click-ouside.js';
import modals from '~/store/modals/modals';

Vue.mixin({

  methods: {
    ShowModal(payload) {
      this.$store.dispatch('modals/show', {
        key: modals.default,
        ...payload,
      });
    },
    CloseModal() {
      this.$store.dispatch('modals/hide');
    },
    SetLoader(value) {
      this.$store.dispatch('loader/setLoading', value);
    },
    Require(img) {
      // eslint-disable-next-line global-require
      // return require(`assets/img/${img}`);
    },
  },
});

Vue.directive('click-outside', clickOutside);
