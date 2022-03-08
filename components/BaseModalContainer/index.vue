<template>
  <transition name="fade">
    <div
      v-if="isShow"
      class="base-modal"
      @mousedown.self="backgroundClick"
    >
      <component
        :is="currentModalKey"
      />
    </div>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex';
import modals from '@/store/modals/modals';

import VestingAdd from '@/components/Modals/VestingAdd';
import VestingEdit from '@/components/Modals/VestingEdit';
import AdminAdd from '@/components/Modals/AdminAdd';
import AdminChangeStatus from '@/components/Modals/AdminChangeStatus';

export default {
  components: {
    'vesting-add-modal': VestingAdd,
    'vesting-edit-modal': VestingEdit,
    'admin-add-modal': AdminAdd,
    'admin-change-modal': AdminChangeStatus,
  },
  data: () => ({
    modals,
  }),
  computed: {
    ...mapGetters({
      isShow: 'modals/getIsShow',
      currentModalKey: 'modals/getCurrentModalKey',
      options: 'modals/getOptions',
    }),
  },
  methods: {
    backgroundClick() {
      if (!this.options.isUnclosable) {
        this.close();
      }
    },
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
