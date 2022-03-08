<template>
  <base-modal-box
    :is-header="true"
    class="modal"
    :title="localization.title"
  >
    <validation-observer
      ref="observerEditVesting"
      v-slot="{ handleSubmit }"
    >
      <form
        action=""
        @submit.prevent="handleSubmit(submit)"
      >
        <validation-provider
          v-slot="{ errors }"
          rules="required|customDate"
          :name="localization.inputs.start.name"
        >
          <base-modal-date-picker
            v-model="form.start"
            :label="localization.inputs.start.label"
            :placeholder="localization.inputs.start.placeholder"
            :error="errors[0]"
          />
        </validation-provider>
        <!--        <validation-provider-->
        <!--          v-slot="{ errors }"-->
        <!--          rules="required|customDate"-->
        <!--          :name="localization.inputs.start.name"-->
        <!--        >-->
        <!--          <base-modal-input-->
        <!--            v-model="form.start"-->
        <!--            :label="localization.inputs.start.label"-->
        <!--            :placeholder="localization.inputs.start.placeholder"-->
        <!--            :error="errors[0]"-->
        <!--          />-->
        <!--        </validation-provider>-->
        <validation-provider
          v-slot="{ errors }"
          :rules="'required|numeric'"
          :name="localization.inputs.interval.name"
        >
          <base-modal-input
            v-model="form.interval"
            :label="localization.inputs.interval.label"
            :placeholder="localization.inputs.interval.placeholder"
            :error="errors[0]"
          />
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          :rules="'required|numeric|min:1|max_value:100'"
          :name="localization.inputs.percentage.name"
        >
          <base-modal-input
            v-model="form.percentage"
            :label="localization.inputs.percentage.label"
            :placeholder="localization.inputs.percentage.placeholder"
            :error="errors[0]"
          />
        </validation-provider>
        <div class="modal__row">
          <button
            type="button"
            class="modal__button"
            @click="close()"
          >
            {{ $t("modals.vesting.buttons.cancel") }}
          </button>
          <button
            type="submit"
            class="modal__button modal__button_add"
          >
            {{ $t("modals.vesting.buttons.add") }}
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
      first: '',
      second: '',
      form: {
        start: '',
        interval: '',
        percentage: '',
      },
      localization: {
        title: this.$t('modals.vesting.addVesting.title'),
        inputs: {
          start: {
            label: this.$t('modals.vesting.inputs.start.label'),
            placeholder: this.$t('modals.vesting.inputs.start.placeholder'),
            name: this.$t('modals.vesting.inputs.start.name'),
          },
          interval: {
            label: this.$t('modals.vesting.inputs.interval.label'),
            placeholder: this.$t('modals.vesting.inputs.interval.placeholder'),
            name: this.$t('modals.vesting.inputs.interval.name'),
          },
          percentage: {
            label: this.$t('modals.vesting.inputs.percentage.label'),
            placeholder: this.$t('modals.vesting.inputs.percentage.placeholder'),
            name: this.$t('modals.vesting.inputs.percentage.name'),
          },
        },
      },
    });
  },
  computed: {
    ...mapGetters({
      options: 'modals/getOptions',
      VestingListLength: 'vesting/getVestingLength',
    }),
  },
  methods: {
    close() {
      this.$store.dispatch('modals/hide');
    },
    async submit() {
      try {
        await this.$store.dispatch('vesting/addVesting', {
          number: this.VestingListLength + 1,
          ...this.form,
        });
        await this.$store.dispatch('modals/hide');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@include ModalBody
</style>
