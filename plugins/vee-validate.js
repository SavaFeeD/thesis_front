import Vue from 'vue';

import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure,
  setInteractionMode,
} from 'vee-validate';

import * as rules from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
setInteractionMode('eager');

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule],
  });
});

extend('customDate', {
  computesRequired: true,
  validate: (value) => {
    // eslint-disable-next-line no-useless-escape
    const pattern = /(^(0?[1-9]|[12][0-9]|3[01])[\.\-](0?[1-9]|1[012])[\.\-]\d{4}$)/;
    return pattern.test(value);
  },
});

export default ({ app }) => {
  configure({
    defaultMessage: (_field_, values) => app.i18n.t(`messages.${values._rule_}`, values),
  });
};
