<template>
  <base-modal-box
    :is-header="true"
    class="modal"
    :title="localization.title"
    :description="localeLocation.description"
  >
    <validation-observer
      ref="observerAddAdmin"
      v-slot="{ handleSubmit }"
    >
      <form
        action=""
        @submit.prevent="handleSubmit(submit)"
      >
        <validation-provider
          v-slot="{ errors }"
          :rules="'required'"
        >
          <div class="modal__fields">
            <div
              v-for="item in radios"
              :key="item.id"
              class="modal__field"
            >
              <input
                :id="`radio${item.id}`"
                v-model="form.status"
                class="modal__input"
                type="radio"
                :value="item.key"
                :name="item.name"
              >
              <label
                class="modal__label"
                :for="`radio${item.id}`"
              >
                <span class="modal__text">{{ item.label }}</span>
              </label>
              <div class="modal__description">
                {{ item.description }}
              </div>
            </div>
          </div>
          <label class="modal__error">{{ errors[0] }}</label>
          <div class="modal__row">
            <button
              type="button"
              class="modal__button"
              @click="close()"
            >
              {{ $t("modals.admin.buttons.cancel") }}
            </button>
            <button
              type="submit"
              class="modal__button modal__button_add"
            >
              {{ $t("modals.admin.buttons.save") }}
            </button>
          </div>
        </validation-provider>
      </form>
    </validation-observer>
  </base-modal-box>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return ({
      form: {
        status: '',
      },
      radios: [
        {
          id: 1,
          label: this.$t('modals.admin.radios.active.label'),
          description: this.$t('modals.admin.radios.active.description'),
          value: 2,
          key: 'active',
          name: this.$t('modals.admin.radios.active.name'),
        },
        {
          id: 2,
          label: this.$t('modals.admin.radios.postponed.label'),
          description: this.$t('modals.admin.radios.postponed.description'),
          value: 0,
          key: 'postponed',
          name: this.$t('modals.admin.radios.postponed.name'),
        },
        {
          id: 3,
          label: this.$t('modals.admin.radios.deleted.label'),
          description: this.$t('modals.admin.radios.deleted.description'),
          value: -1,
          key: 'deleted',
          name: this.$t('modals.admin.radios.deleted.name'),
        },
      ],
      localization: {
        title: this.$t('modals.admin.changeStatus.title'),
        description: this.$t('admin.modals.change.title'),
      },
    });
  },
  computed: {
    ...mapGetters({
      options: 'modals/getOptions',
    }),
  },
  methods: {
    close() {
      this.$store.dispatch('modals/hide');
    },
    async submit() {
      try {
        const payload = {
          id: this.options.id,
          status: this.form.status,
          limit: this.options.limit,
          offset: this.options.offset,
        };
        await this.$store.dispatch('admin-management/changeAdminStatus', payload);
        await this.$store.dispatch('modals/hide');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@include ModalBody;
</style>
