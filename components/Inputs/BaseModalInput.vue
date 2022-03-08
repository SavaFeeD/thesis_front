<template>
  <div
    class="form-group"
    :class="{
      'input-group-focus': focused,
      'has-danger': errorIcon && error,
      'has-success': successIcon && !error && touched,
      'has-label': label,
      'has-icon': hasIcon,
      'field': true,
    }"
  >
    <slot name="label">
      <label
        v-if="label"
        class="field__label"
      > {{ label }} {{ required ? '*' : '' }} </label>
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
          class="form-control field__input"
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
      <label class="error field__error">{{ error }}</label>
    </slot>
    <slot name="helperText" />
  </div>
</template>
<script>
export default {
  name: 'BaseModalInput',
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
    successIcon: {
      type: Boolean,
    },
    errorIcon: {
      type: Boolean,
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
<style lang="scss" scoped>
.field {
  margin-bottom: 15px;
  &__label {
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
  }
  &__input {
    border: 1px solid #303540;
    height: 50px;
    &::placeholder {
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: #898B8F;
    }
    &:focus {
      border: 1px solid #5B9490;
    }
    &:hover {
      border: 1px solid #5B9490;
    }
    &:active {
      border: 1px solid #5B9490;
    }
  }
  &__error {
    font-size: 14px;
    color: red;
    font-weight: 400;
  }
}

</style>
