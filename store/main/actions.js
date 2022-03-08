export default {
  showToast(app, value) {
    this._vm.$bvToast.toast(value.text, {
      title: value.title || 'Error',
      variant: 'danger',
      solid: true,
      toaster: 'b-toaster-bottom-right',
      appendToast: true,
    });
  },
};
