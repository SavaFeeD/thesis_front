<template>
  <div
    class="base-modal__box"
  >
    <div
      v-if="isHeader === true"
      :class="setHeaderStyle"
    >
      <div class="base-modal__title">
        <span>{{ options.title || title || 'Default' }}</span>
      </div>
      <button
        v-if="!options.isUnclosable"
        class="base-modal__x"
        @click="close()"
      >
        <img
          alt=""
          src="~/assets/img/icons/cross-icon.svg"
        >
      </button>
    </div>
    <div
      v-if="options.description || description"
      class="base-modal__description"
    >
      <span>{{ options.description || description }}</span>
    </div>
    <slot />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    isUnclosable: {
      type: Boolean,
      default: false,
    },
    isHeader: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters({
      options: 'modals/getOptions',
    }),
    setHeaderStyle() {
      return `base-modal__header ${this.options.description || this.description ? 'base-modal__header_description' : ''}`;
    },
  },
  methods: {
    close() {
      this.$store.dispatch('modals/hide');
    },
  },
};
</script>
<style lang="scss" scoped>
.base-modal {
  @include modalKit;
}
</style>
