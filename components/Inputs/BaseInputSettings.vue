<template>
  <validation-provider
    v-slot="{ errors }"
    tag="div"
    class="field"
    :class="[
      { field_default: mode === 'default' },
      { 'field_icon-before': mode === 'icon-before' },
      { 'field_icon-after': mode === 'icon-after' },
      { field_editable: mode === 'editable' },
    ]"
    :rules="rules"
    :name="name"
    :vid="vid"
    mode="eager"
    slim
  >
    <div class="d-flex">
      <div
        v-if="label !== ''"
        class="field__label"
      >
        {{ label }}
      </div>
      <div v-if="currentDate !== ''">
        ({{ currentDate }})
      </div>
    </div>

    <div
      v-if="mode === 'icon-before'"
      class="icon-before"
    >
      <slot name="iconBefore" />
    </div>
    <input
      class="field__input"
      :placeholder="placeholder"
      :value="value"
      :type="type"
      :autocomplete="autocomplete"
      :disabled="disabled"
      @input="input"
    >
    <slot
      class="field__icon-outherInput"
      name="outherInput"
    />
    <div
      class="sale"
    >
      <slot name="sale" />
    </div>
    <div
      v-if="mode === 'icon-after'"
      class="icon-after"
    >
      <slot name="iconAfter" />
    </div>
    <div
      v-if="!isHideError"
      class="field__err"
    >
      {{ errors[0] }}
    </div>
  </validation-provider>
</template>
<script>
export default {
  props: {
    currentDate: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    errorText: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isHideError: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    autocomplete: {
      type: String,
      default: 'on',
    },
    rules: {
      type: [String, Array, Object],
      description: 'Vee validate validation rules',
      default: '',
    },
    name: {
      type: String,
      description: 'Input name (used for validation)',
      default: '',
    },
    vid: {
      type: String,
      default: '',
    },
    selector: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    input($event) {
      this.$emit('input', $event.target.value);
      if (this.selector) {
        this.$emit('selector', $event.target.value);
      }
    },
    clear() {
      this.$emit('input', '');
    },
  },
};
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  flex-direction: column;
  position: relative;
  &__input {
    width: 100%;
    background: none;
    border: 1px solid #303540;
    border-radius: 4px;
    padding: 15px;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 20px;
    &::placeholder {
      color: #898B8F;
      font-size: 16px;
      line-height: 20px;
    }
    &:disabled {
      border: 1px solid transparent;
      background-color: transparent;
    }
    &:focus {
      border: 1px solid #5B9490;
    }
  }
  &__err {
    padding: 2px 0 5px 0;
    font-size: 12px;
    grid-column: 2/3;
    color: #FF1725;
  }
  .save {
    border-radius: 6px;
  }
  &_icon-before {
    input {
      width: 100%;
      background: #ffffff;
      border-radius: 6px;
      padding: 20px 20px 20px 65px;
      &::placeholder {
      }
      &:focus {
      }
    }
    .icon-before {
      position: absolute;
      margin: 0 0 0 20px;
      width: 30px;
      height: 30px;
      top: 17px;
    }
  }
  &_icon-after {
    input {
      width: 100%;
      background: #ffffff;
      border-radius: 6px;
      padding: 20px 65px 20px 20px;
      &::placeholder {
      }
      &:focus {
      }
    }
    .icon-after {
      position: absolute;
      margin: 0 0 0 20px;
      left: 95%;
      width: 30px;
      height: 30px;
      top: 17px;
    }
  }
  &_default {
    input {
      font-weight: 400;
      background: #ffffff;
      border-radius: 6px;
      padding: 15px 19px;
      font-size: 16px;
      transition: border 0.2s;
      &:focus {
      }
      &::placeholder {
      }
    }
  }
  &_editable {
    display: grid;
    grid-template-columns: 2fr 8fr 0.5fr;
    align-items: center;
    background-color: #fff;
    padding: 20px 30px;
    margin-bottom: 1px;
  }
  &__icon-outherInput {
    padding-left: 20px;
  }
  &__label {
    font-weight: 600;
    padding: 0 20px 5px 0;
  }
  .sale {
    position: absolute;
    margin: 0 0 0 20px;
    left: 95%;
    width: 30px;
    height: 30px;
    top: 20px;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
