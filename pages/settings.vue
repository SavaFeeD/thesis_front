<template>
  <div
    v-if="Object.keys(settingInfo).length"
    class="settings"
  >
    <div class="settings__wrap">
      <validation-observer
        v-slot="{ handleSubmit }"
      >
        <form
          class="settings__card"
          @submit.prevent="handleSubmit(changeTokenInfo)"
        >
          <h5 class="settings__title-card">
            {{ $t('settings.tokenInfo.title') }}
          </h5>
          <base-input-settings
            v-for="(key, index) in Object.keys(fields.token)"
            :key="`field-tokenInfo-${index}`"
            v-model="forms.token[key]"
            class="settings__label"
            :label="fields.token[key].label"
            :name="fields.token[key].label"
            :placeholder="fields.token[key].placeholder"
            :type="fields.token[key].type"
            :rules="fields.token[key].rules"
          />
          <div class="settings__wrap-btn">
            <base-button
              tag="button"
              class="settings__btn settings__btn_outline"
              @click="() => resetInfo('token')"
            >
              {{ $t('settings.ui.btn.reset') }}
            </base-button>
            <base-button
              tag="button"
              native-type="submit"
              class="settings__btn settings__btn_block"
            >
              {{ $t('settings.ui.btn.save') }}
            </base-button>
          </div>
        </form>
      </validation-observer>
      <validation-observer
        v-slot="{ handleSubmit }"
      >
        <form
          class="settings__card"
          @submit.prevent="handleSubmit(changeTrancheInfo)"
        >
          <h5 class="settings__title-card">
            {{ $t('settings.trancheInfo.title') }}
          </h5>
          <div
            v-for="(key, index) in Object.keys(fields.tranche)"
            :key="`field-tokenInfo-${index}`"
          >
            <base-input-settings
              v-if="key === 'start' || key === 'end'"
              v-model="forms.tranche[key].value"
              :current-date="forms.tranche[key].currentDate"
              :name="fields.tranche[key].label"
              class="settings__label"
              :label="fields.tranche[key].label"
              :placeholder="fields.tranche[key].placeholder"
              :type="fields.tranche[key].type"
              :rules="fields.tranche[key].rules"
            />
            <base-input-settings
              v-else
              v-model="forms.tranche[key]"
              :name="fields.tranche[key].label"
              class="settings__label"
              :label="fields.tranche[key].label"
              :placeholder="fields.tranche[key].placeholder"
              :type="fields.tranche[key].type"
              :rules="fields.tranche[key].rules"
            />
          </div>
          <div class="settings__wrap-btn">
            <base-button
              tag="button"
              class="settings__btn settings__btn_outline"
              @click="() => resetInfo('tranche')"
            >
              {{ $t('settings.ui.btn.reset') }}
            </base-button>
            <base-button
              tag="button"
              native-type="submit"
              class="settings__btn settings__btn_block"
            >
              {{ $t('settings.ui.btn.save') }}
            </base-button>
          </div>
        </form>
      </validation-observer>
      <validation-observer
        v-slot="{ handleSubmit }"
      >
        <form
          class="settings__card"
          @submit.prevent="handleSubmit(changeInvestmentInfo)"
        >
          <h5 class="settings__title-card">
            {{ $t('settings.investmentInfo.title') }}
          </h5>
          <base-input-settings
            v-for="(key, index) in Object.keys(fields.investment)"
            :key="`field-tokenInfo-${index}`"
            v-model="forms.investment[key]"
            :placeholder="fields.investment[key].placeholder"
            :type="fields.investment[key].type"
            :name="fields.investment[key].label"
            class="settings__label"
            :label="fields.investment[key].label"
            :rules="fields.investment[key].rules"
          />
          <div class="settings__wrap-btn">
            <base-button
              tag="button"
              class="settings__btn settings__btn_outline"
              @click="() => resetInfo('investment')"
            >
              {{ $t('settings.ui.btn.reset') }}
            </base-button>
            <base-button
              tag="button"
              native-type="submit"
              class="settings__btn settings__btn_block"
            >
              {{ $t('settings.ui.btn.save') }}
            </base-button>
          </div>
        </form>
      </validation-observer>
      <div>
        <div class="settings__wrap_column">
          <div>
            <validation-observer
              v-slot="{ handleSubmit }"
            >
              <form
                class="settings__card"
                @submit.prevent="handleSubmit((changeIcoInfo))"
              >
                <h5 class="settings__title-card">
                  {{ $t('settings.icoInfo.title') }}
                </h5>
                <base-input-settings
                  v-for="(key, index) in Object.keys(fields.ico)"
                  :key="`field-tokenInfo-${index}`"
                  v-model="forms.ico[key]"
                  :placeholder="fields.ico[key].placeholder"
                  :type="fields.ico[key].type"
                  :name="fields.ico[key].label"
                  class="settings__label"
                  :label="fields.ico[key].label"
                  :rules="fields.ico[key].rules"
                />
                <div class="settings__wrap-btn">
                  <base-button
                    tag="button"
                    class="settings__btn settings__btn_outline"
                    @click="() => resetInfo('ico')"
                  >
                    {{ $t('settings.ui.btn.reset') }}
                  </base-button>
                  <base-button
                    tag="button"
                    native-type="submit"
                    class="settings__btn settings__btn_block"
                  >
                    {{ $t('settings.ui.btn.save') }}
                  </base-button>
                </div>
              </form>
            </validation-observer>
          </div>
          <div>
            <validation-observer
              v-slot="{ handleSubmit }"
            >
              <form
                class="settings__card"
                @submit.prevent="handleSubmit"
              >
                <h5 class="settings__title-card">
                  {{ $t('settings.priceFormulaPolicy.title') }}
                </h5>
                <base-input-settings
                  v-for="(key, index) in Object.keys(priceFormulaPolicy)"
                  :key="`field-tokenInfo-${index}`"
                  v-model="priceFormulaPolicy[key].value"
                  :placeholder="priceFormulaPolicy[key].placeholder"
                  :type="priceFormulaPolicy[key].type"
                  :name="priceFormulaPolicy[key].label"
                  class="settings__label"
                  :label="priceFormulaPolicy[key].label"
                  :rules="priceFormulaPolicy[key].rules"
                />
              </form>
            </validation-observer>
          </div>
        </div>
      </div>
    </div>
    <div class="settings__wrap">
      <div>
        <validation-observer
          v-slot="{ handleSubmit }"
        >
          <form
            class="settings__card"
            @submit.prevent="handleSubmit"
          >
            <h5 class="settings__title-card">
              {{ $t('settings.acceptedCurrencies.title') }}
            </h5>
            <div class="settings__wrap-badges">
              <div
                v-for="(item, index) of acceptedCurrencies.list"
                :key="`paymentGateways-${index}`"
                @click="() => {changeBadge(acceptedCurrencies.list, item.id, false)}"
              >
                <button
                  v-if="item.active"
                  class="settings__badges"
                  type="button"
                >
                  {{ item.label }}
                  <img
                    v-if="item.active"
                    class="settings__badges-icon"
                    alt="close"
                    src="~assets/img/icons/close.svg"
                  >
                </button>
              </div>
            </div>
            <label class="settings__label">
              {{ $t('settings.acceptedCurrencies.fields.newCurrency.label') }}
            </label>
            <el-select
              v-model="newCurrency"
              class="settings__select select-primary"
            >
              <el-option
                v-for="(item, index) in acceptedCurrencies.list"
                :key="`paymentGatewaysSelect-${index}`"
                :ref="`badgeGateways${index}`"
                class="select-primary"
                :class="{ 'hide' : item.active }"
                :label="item.label"
                :value="item.id"
              />
            </el-select>
          </form>
        </validation-observer>
      </div>
      <div>
        <validation-observer
          v-slot="{ handleSubmit }"
        >
          <form
            class="settings__card"
            @submit.prevent="handleSubmit"
          >
            <h5 class="settings__title-card">
              {{ $t('settings.paymentGateways.title') }}
            </h5>
            <div class="settings__wrap-badges">
              <div
                v-for="(item, index) of paymentGateways.list"
                :key="`paymentGateways-${index}`"
                @click="() => {changeBadge(paymentGateways.list, item.id, false)}"
              >
                <button
                  v-if="item.active"
                  class="settings__badges"
                  type="button"
                >
                  {{ item.label }}
                  <img
                    v-if="item.active"
                    class="settings__badges-icon"
                    alt="close"
                    src="~assets/img/icons/close.svg"
                  >
                </button>
              </div>
            </div>
            <label class="settings__label">
              {{ $t('settings.paymentGateways.fields.newGateways.label') }}
            </label>
            <el-select
              v-model="newGateways"
              class="settings__select select-primary"
            >
              <el-option
                v-for="(item, index) in paymentGateways.list"
                :key="`paymentGatewaysSelect-${index}`"
                :ref="`badgeGateways${index}`"
                class="select-primary"
                :class="{ 'hide' : item.active }"
                :label="item.label"
                :value="item.id"
              />
            </el-select>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { Option, Select } from 'element-ui';
import BaseInputSettings from '~/components/Inputs/BaseInputSettings';

export default {
  name: 'Settings',
  components: {
    BaseInputSettings,
    [Select.name]: Select,
    [Option.name]: Option,
  },
  layout: 'default',
  data() {
    return {
      forms: {
        token: {
          name: '',
          symbol: '',
          total: '',
          decimal: '',
        },
        tranche: {
          amount: '',
          tranches: '',
          start: {
            currentDate: '',
            value: '',
          },
          end: {
            currentDate: '',
            value: '',
          },
        },
        investment: {
          min: '',
          max: '',
          start: '',
          end: '',
        },
        ico: {
          cap: '',
        },
      },
      fields: {
        token: {
          name: {
            placeholder: this.$t('settings.tokenInfo.fields.tokenName.placeholder'),
            type: 'text',
            label: this.$t('settings.tokenInfo.fields.tokenName.label'),
            rules: 'required',
          },
          symbol: {
            placeholder: this.$t('settings.tokenInfo.fields.tokenSymbol.placeholder'),
            type: 'text',
            label: this.$t('settings.tokenInfo.fields.tokenSymbol.label'),
            rules: 'required',
          },
          total: {
            placeholder: '1 800 000 000',
            type: 'number',
            label: this.$t('settings.tokenInfo.fields.totalToken.label'),
            rules: 'required',
          },
          decimal: {
            placeholder: '1',
            type: 'number',
            label: this.$t('settings.tokenInfo.fields.tokenDecimal.label'),
            rules: 'required',
          },
        },
        tranche: {
          amount: {
            placeholder: '18 000 000',
            type: 'number',
            label: this.$t('settings.trancheInfo.fields.trancheAmount.label'),
            rules: 'required',
          },
          tranches: {
            placeholder: '100',
            type: 'number',
            label: this.$t('settings.trancheInfo.fields.tranches.label'),
            rules: 'required',
          },
          start: {
            placeholder: '07.01.2021',
            type: 'date',
            label: this.$t('settings.trancheInfo.fields.trancheStartDate.label'),
            rules: 'required',
          },
          end: {
            placeholder: '07.02.2021',
            type: 'date',
            label: this.$t('settings.trancheInfo.fields.trancheEndDate.label'),
            rules: 'required',
          },
        },
        investment: {
          min: {
            placeholder: '100',
            type: 'text',
            label: this.$t('settings.investmentInfo.fields.minimumInvestment.label'),
            rules: 'required',
          },
          max: {
            placeholder: '250 000',
            type: 'text',
            label: this.$t('settings.investmentInfo.fields.maximumInvestment.label'),
            rules: 'required',
          },
          start: {
            placeholder: '0.0104',
            type: 'text',
            label: this.$t('settings.investmentInfo.fields.startPrice.label'),
            rules: 'required',
          },
          end: {
            placeholder: '0.0993',
            type: 'text',
            label: this.$t('settings.investmentInfo.fields.endPrice.label'),
            rules: 'required',
          },
        },
        ico: {
          cap: {
            placeholder: '120 000 000',
            type: 'text',
            label: this.$t('settings.icoInfo.fields.hardCap.label'),
            rules: 'required',
          },
        },
      },
      acceptedCurrencies: {
        list: [
          {
            id: 0,
            label: 'BTC',
            active: false,
          },
          {
            id: 1,
            label: 'ETH',
            active: false,
          },
          {
            id: 2,
            label: 'BNB',
            active: false,
          },
          {
            id: 3,
            label: 'USDT',
            active: false,
          },
          {
            id: 4,
            label: 'COIN',
            active: false,
          },
          {
            id: 5,
            label: 'USDC',
            active: false,
          },
          {
            id: 6,
            label: 'TRX',
            active: false,
          },
        ],
      },
      newCurrency: '',
      paymentGateways: {
        list: [
          {
            id: 0,
            label: 'CoinBase',
            active: false,
          },
          {
            id: 1,
            label: 'Paypal',
            active: false,
          },
          {
            id: 2,
            label: 'Wire',
            active: false,
          },
        ],
      },
      newGateways: '',
      priceFormulaPolicy: {
        priceFormula: {
          value: '',
          placeholder: 'P=S+T256/457',
          type: 'text',
          label: this.$t('settings.priceFormulaPolicy.fields.priceFormula.label'),
          rules: '',
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      settingInfo: 'setting/settingInfo',
    }),
  },
  watch: {
    newGateways: {
      immediate: true,
      handler() {
        this.changeBadge(this.paymentGateways.list, this.newGateways, true);
      },
    },
    newCurrency: {
      immediate: true,
      handler() {
        this.changeBadge(this.acceptedCurrencies.list, this.newCurrency, true);
      },
    },
    settingInfo: {
      immediate: true,
      deep: true,
      handler() {
        this.formatInfo();
      },
    },
  },
  async mounted() {
    try {
      await this.getInfo();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async resetInfo(formName) {
      try {
        const payload = {
          formName,
        };
        await this.$store.dispatch('setting/resetSettingInfo', payload);
      } catch (e) {
        console.log(e);
      }
    },
    formatInfo() {
      const info = this.settingInfo;
      Object.keys(info).forEach((formName) => {
        Object.keys(info[formName]).forEach((fieldName) => {
          if (fieldName === 'start' || fieldName === 'end') {
            if (`${info[formName][fieldName]}`.split('.').length === 3 || `${info[formName][fieldName]}`.split('-').length === 3) {
              this.forms[formName][fieldName].currentDate = `${info[formName][fieldName]}`;
              console.log(`${info[formName][fieldName]}`);
            } else {
              this.forms[formName][fieldName] = `${info[formName][fieldName]}`;
            }
          } else {
            this.forms[formName][fieldName] = `${info[formName][fieldName]}`;
          }
        });
      });
    },
    async getInfo() {
      await this.$store.dispatch('setting/getSettingInfo');
    },
    async changeTokenInfo() {
      try {
        const payload = {
          formName: 'token',
          value: {
            name: this.forms.token.name,
            symbol: this.forms.token.symbol,
            total: this.forms.token.total,
            decimal: this.forms.token.decimal,
          },
        };
        await this.$store.dispatch('setting/changeSettingInfo', payload);
      } catch (e) {
        console.log(e);
      }
    },
    async changeTrancheInfo() {
      try {
        const payload = {
          formName: 'tranche',
          value: {
            amount: this.forms.tranche.amount,
            tranches: this.forms.tranche.tranches,
            start: this.forms.tranche.start.value,
            end: this.forms.tranche.end.value,
          },
        };
        await this.$store.dispatch('setting/changeSettingInfo', payload);
      } catch (e) {
        console.log(e);
      }
    },
    async changeInvestmentInfo() {
      try {
        const payload = {
          formName: 'investment',
          value: {
            min: this.forms.investment.min,
            max: this.forms.investment.max,
            start: this.forms.investment.start,
            end: this.forms.investment.end,
          },
        };
        await this.$store.dispatch('setting/changeSettingInfo', payload);
      } catch (e) {
        console.log(e);
      }
    },
    async changeIcoInfo() {
      try {
        const payload = {
          formName: 'ico',
          value: {
            cap: this.forms.ico.cap,
          },
        };
        await this.$store.dispatch('setting/changeSettingInfo', payload);
      } catch (e) {
        console.log(e);
      }
    },
    changeAcceptedCurrencies() {
      const data = this.acceptedCurrencies;
    },
    changePaymentGateways() {
      const data = this.paymentGateways;
    },
    changeBadge(container, dataId, state) {
      container.forEach((item) => {
        if (item.id === dataId) {
          item.active = state;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.settings {
  display: flex;
  flex-direction: column;
  &__wrap {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-bottom: 20px;
    &_column {
      display: grid;
      grid-template: repeat(2, 1fr) / none;
      grid-gap: 20px;
    }
  }
  &__card {
    display: flex;
    flex-direction: column;
    background: #22262F;
    border-radius: 5px;
    padding: 20px;
    min-width: 380px;
  }
  &__title-card {
    font-size: 17px;
    line-height: 21px;
    color: #FFFFFF;
  }
  &__label {
    font-size: 16px;
    line-height: 145%;
    color: #FFFFFF;
  }
  &__wrap-badges {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 20px 0;
  }
  &__badges {
    margin: 0 10px 10px 0;
    background: #81B2AE;
    border-radius: 100px;
    border: none;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 22px;
    padding: 0 10px;
  }
  &__wrap-btn {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    margin-top: 15px;
  }
  &__btn {
    height: 40px;
    padding: 0 13px;
    &_outline {
      color: #5B9490;
      background: none;
      border: 1px solid #5B9490;
      &:hover {
        background: none!important;
        box-shadow: none!important;
        transform: none!important;
      }
      &:active {
        background: none!important;
        box-shadow: none!important;
        transform: none!important;
        border: 1px solid #5B9490!important;
        color: #FFFFFF;
      }
      &:focus {
        background: none!important;
        box-shadow: none!important;
        transform: none!important;
        color: #FFFFFF;
      }
    }
    &_block {
      background: #5B9490;
      &:hover {
        background: #5B9490!important;
        box-shadow: none!important;
        transform: none!important;
      }
      &:active {
        background: #6CA5A1!important;
        box-shadow: none!important;
        transform: none!important;
      }
      &:focus {
        background: #5B9490!important;
        box-shadow: none!important;
        transform: none!important;
      }
    }
  }
}
.hide {
  display: none!important;
}
</style>
