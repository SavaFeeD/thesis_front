<template>
  <div
    class="form-group"
    :class="{
      'input-group-focus': focused,
      'has-danger': error,
      'has-success': !error && touched,
      'has-label': label,
      'has-icon': hasIcon,
    }"
  >
    <slot name="label">
      <label v-if="label"> {{ label }} {{ required ? '*' : '' }} </label>
    </slot>
    <div
      class="mb-0"
      :class="{'input-group': hasIcon}"
    >
      <slot name="addonLeft">
        <span
          v-if="addonLeftIcon"
          class="input-group-prepend"
        >
          <div class="input-group-text"><i :class="addonLeftIcon" /></div>
        </span>
      </slot>
      <slot>
        <input
          :value="value"
          v-bind="$attrs"
          class="form-control"
          aria-describedby="addon-right addon-left"
          v-on="listeners"
        >
      </slot>
      <slot name="addonRight">
        <span
          v-if="addonRightIcon"
          class="input-group-append"
        >
          <div class="input-group-text"><i :class="addonRightIcon" /></div>
        </span>
      </slot>
    </div>
    <slot
      v-if="error || $slots.error"
      name="error"
    >
      <label class="error">{{ error }}</label>
    </slot>
    <slot name="helperText" />
  </div>
</template>
<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    required: Boolean,
    label: {
      type: String,
      description: 'Input label',

    },
    error: {
      type: String,
      description: 'Input error',
      default: '',
    },
    value: {
      type: [String, Number],
      description: 'Input value',

    },
    addonRightIcon: {
      type: String,
      description: 'Input icon on the right',

    },
    addonLeftIcon: {
      type: String,
      description: 'Input icon on the left',

    },
  },
  data() {
    return {
      focused: false,
      touched: false,
    };
  },
  computed: {
    hasIcon() {
      return this.hasLeftAddon || this.hasRightAddon;
    },
    hasLeftAddon() {
      const { addonLeft } = this.$slots;
      return (
        addonLeft !== undefined
        || this.addonLeftIcon !== undefined
      );
    },
    hasRightAddon() {
      const { addonRight } = this.$slots;
      return (
        addonRight !== undefined
        || this.addonRightIcon !== undefined
      );
    },
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        blur: this.onBlur,
        focus: this.onFocus,
      };
    },
  },
  methods: {
    onInput(evt) {
      if (!this.touched) {
        this.touched = true;
      }
      this.$emit('input', evt.target.value);
    },
    onFocus(evt) {
      this.focused = true;
      this.$emit('focus', evt);
    },
    onBlur(evt) {
      this.focused = false;
      this.$emit('blur', evt);
    },
  },
};
</script>
<style scoped lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
