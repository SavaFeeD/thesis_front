<template>
  <div class="sign-up">
    <div>
      <div class="card">
        <div class="card-header">
          <h2 class="sign-up__title">
            {{ $t('modals.admin.inputs.login') }}
          </h2>
        </div>
        <validation-observer
          v-slot="{ handleSubmit }"
        >
          <div class="card-body">
            <form
              action=""
              @submit.prevent="handleSubmit()"
            >
              <validation-provider
                v-slot="{ errors }"
                :rules="'required|email'"
                :name="locForm.email"
              >
                <base-input
                  v-model="form.email"
                  :label="locForm.email"
                  placeholder="mail@mail.com"
                />
                <div
                  v-if="errors"
                  name="error"
                >
                  <label
                    v-if="errors"
                    class="error"
                  >{{ errors[0] }}</label>
                </div>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                :rules="'required|min:6'"
                :name="locForm.password"
              >
                <base-input
                  v-model="form.pass"
                  :label="locForm.password"
                  placeholder="*******"
                  type="password"
                />
                <div
                  v-if="errors"
                  name="error"
                >
                  <label class="error">{{ errors[0] }}</label>
                </div>
              </validation-provider>
              <div class="loginBtn">
                <base-button
                  tag="button"
                  type="submit"
                  native-type="submit"
                  class="sign-up__btn-submit"
                  @click="login()"
                >
                  {{ $t('modals.admin.inputs.login') }}
                </base-button>
              </div>
            </form>
          </div>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'guest',
  data() {
    return {
      locForm: {
        email: this.$t('admin.columns.email.label'),
        password: this.$t('admin.columns.password.label'),
      },
      form: {
        email: '',
        pass: '',
      },
    };
  },
  methods: {
    async login() {
      try {
        const payload = {
          email: this.form.email,
          password: this.form.pass,
        };
        await this.$store.dispatch('auth/login', payload);
        this.$router.push('/');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.sign-up {
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: repeat(2, 1fr);
  .card {
    max-width: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &-header {
      display: flex;
      justify-content: center;
      margin-bottom: 0;
    }
  }
  .error {
    color: red;
  }
  .loginBtn {
    text-align: center;
  }
  &__title {
    margin: 0;
  }
  &__btn-submit {
    background: #5B9490;
    border: 1px solid #5B9490;
    font-family: Montserrat;
    width: 200px;
    color: #FFFFFF;
    border: none;
  }
}
</style>
