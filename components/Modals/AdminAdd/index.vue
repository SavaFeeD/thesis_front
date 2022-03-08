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
          :rules="'required|email'"
          :name="localization.inputs.email.name"
        >
          <base-modal-input
            v-model="form.email"
            :label="localization.inputs.email.label"
            :placeholder="localization.inputs.email.placeholder"
            :error="errors[0]"
          />
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          :rules="'required'"
          :name="localization.options.name"
        >
          <label class="label"> {{ localization.options.label }}</label>
          <el-select
            v-model="form.value"
            :placeholder="localization.options.placeholder"
            :error="errors[0]"
            :name="localization.options.name"
            class="select-primary mb-3 pagination-select list__pagination-selector"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </validation-provider>
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
            {{ $t("modals.admin.buttons.add") }}
          </button>
        </div>
      </form>
    </validation-observer>
  </base-modal-box>
</template>

<script>
import { mapGetters } from 'vuex';
import { Select, Option } from 'element-ui';

export default {
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return ({
      first: '',
      second: '',
      form: {
        email: '',
        value: null,
      },
      localization: {
        title: this.$t('modals.admin.addAdmin.title'),
        description: this.$t('admin.modals.add.title'),
        inputs: {
          email: {
            label: this.$t('modals.admin.inputs.email.label'),
            placeholder: this.$t('modals.admin.inputs.email.placeholder'),
            name: this.$t('modals.admin.inputs.email.name'),
          },
        },
        options: {
          name: this.$t('admin.inputs.lvl.name'),
          label: this.$t('modals.admin.inputs.lvl.label'),
          placeholder: this.$t('modals.admin.inputs.lvl.placeholder'),
          super: this.$t('modals.admin.inputs.lvl.super'),
          analyst: this.$t('modals.admin.inputs.lvl.analyst'),
        },
      },
    });
  },
  computed: {
    ...mapGetters({
      options: 'modals/getOptions',
      AdminListLength: 'admins/getAdminsListLength',
    }),
    options() {
      return [
        {
          value: 'super-admin',
          label: 'Super admin',
        },
        {
          value: 'analyst-admin',
          label: 'Analyst admin',
        },
      ];
    },
  },
  methods: {
    close() {
      this.$store.dispatch('modals/hide');
    },
    async submit() {
      let payload;
      try {
        payload = {
          email: this.form.email,
          role: this.form.value,
        };
        await this.$store.dispatch('auth/invite', payload);
        this.close();
      } catch (e) {
        console.log(e);
      }
      payload = {
        limit: this.options.limit,
        offset: this.options.offset,
      };
      await this.$store.dispatch('admin-management/getAdminsList', payload);
    },
    // async submit() {
    //   try {
    //     await this.$store.dispatch('admins/addAdmin', {
    //       number: this.AdminListLength + 1,
    //       ...this.form,
    //     });
    //     await this.$store.dispatch('modals/hide');
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
  },
};
</script>

<style scoped lang="scss">
  @include ModalBody;
  .label {
    color: #fff;
  }
  .form-select {
    width: 100%;
    padding: 10px;
    background-color: transparent;
    color: #898B8F;
    border: 1px solid #303540;
    margin-bottom: 30px;
    border-radius: 0.4285rem;
  }
  .el-select {
    display: block;
  }
</style>
