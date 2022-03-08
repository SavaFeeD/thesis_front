<template>
  <div class="list">
    <div class="row">
      <div class="col-12">
        <div class="card list__content">
          <div class="card-header">
            <div class="card-title">
              <h4>{{ $t("userList.title") }}</h4>
              <span>{{ users.totalCount.toLocaleString() }}</span>
            </div>
            <button
              class="export"
              type="button"
            >
              <img
                alt=""
                src="~/assets/img/icons/bottom_arrow.svg"
                class="icon"
              >
              <span>{{ $t("userList.buttons.export") }}</span>
            </button>
          </div>
          <div class="col-12 d-flex justify-content-start flex-wrap">
            <div class="row w-100 justify-content-between">
              <!-- pagination perPage select -->
              <div class="col-auto">
                <el-select
                  v-model="pagination.perPage"
                  class="select-primary mb-3 pagination-select list__pagination-selector"
                  placeholder="Per page"
                >
                  <el-option
                    v-for="item in pagination.perPageOptions"
                    :key="item"
                    class="select-primary"
                    :label="item"
                    :value="item"
                  />
                </el-select>
              </div>

              <!-- search -->
              <div class="col-auto">
                <base-input>
                  <el-input
                    v-model="searchQuery"
                    type="search"
                    class="mb-3 search-input"
                    prefix-icon="tim-icons icon-zoom-split"
                    :placeholder="localization.inputs.search.placeholder"
                    aria-controls="datatables"
                  />
                </base-input>
              </div>
            </div>
            <div class="badges">
              <button
                v-for="item of badges"
                :key="item.id"
                :class="`badges__single ${item.active ? 'badges__single_active' : ''}`"
                type="button"
                @click.self="setBadgeIsActive(item, true)"
              >
                <span @click="setBadgeIsActive(item, true)">
                  {{ item.label }}
                </span>
                <img
                  v-if="item.active"
                  class="badges__icon"
                  alt=""
                  src="~/assets/img/icons/close.svg"
                  @click="setBadgeIsActive(item, false)"
                >
              </button>
            </div>
          </div>

          <!-- table -->
          <div class="list__scroll">
            <div class="list__table">
              <el-table
                :data="queriedData"
                fit
                size="large"
              >
                <el-table-column
                  v-for="column in tableColumns"
                  :key="column.label"
                  :min-width="column.minWidth"
                  :prop="column.prop"
                  :label="column.label"
                  :sortable="column.sortable"
                  label-class-name="list__table-header"
                >
                  <template #default="{row}">
                    <div
                      v-if="column.prop === 'signedUp'"
                      class="align-items-center d-flex flex-row"
                    >
                      <span class="list__cell_signed">
                        {{ row[column.prop] }}
                      </span>
                    </div>
                    <div
                      v-else-if="column.prop === 'purchased'"
                      class="align-items-center d-flex flex-row"
                    >
                      <span class="list__cell">
                        {{ row.purchased.toLocaleString() }} {{ row.currency }}
                      </span>
                    </div>
                    <div
                      v-else-if="column.prop === 'whitelist'"
                      class="align-items-center d-flex flex-row"
                    >
                      <input
                        :id="`whitelist-box${row.id}`"
                        type="checkbox"
                        class="list__checkbox list__checkbox_input"
                        :value="row"
                      >
                      <label :for="`whitelist-box${row.id}`">
                        <div
                          v-if="row.whitelist"
                          class="list__checkbox list__checkbox_checked"
                        >
                          <img
                            alt=""
                            src="~/assets/img/icons/check-mark.svg"
                          >
                        </div>
                        <div
                          v-else
                          class="list__checkbox"
                        >
                          <img
                            alt=""
                            src="~/assets/img/icons/dash.svg"
                          >
                        </div>
                      </label>
                    </div>
                    <div
                      v-else-if="column.prop === 'profile'"
                      class="align-items-center d-flex flex-row"
                    >
                      <nuxt-link
                        to="/user-page"
                      >
                        <button
                          class="list__button"
                          type="button"
                        >
                          {{ $t("userList.buttons.profile") }}
                        </button>
                      </nuxt-link>
                    </div>
                    <div
                      v-else
                      class="align-items-center d-flex flex-row"
                    >
                      <span class="list__cell">
                        {{ row[column.prop] }}
                      </span>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <!-- table footer -->
          <div
            slot="footer"
            class="list__footer"
          >
            <!--            <div class="">-->
            <!--              <p class="card-category">-->
            <!--                Showing {{ from + 1 }} to {{ to }} of {{ total }} entries-->
            <!--              </p>-->
            <!--            </div>-->
            <base-pagination
              v-model="pagination.currentPage"
              class="pagination-no-border"
              :per-page="pagination.perPage"
              :total="total"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Option, Select, Table, TableColumn,
} from 'element-ui';
import { BasePagination } from '@/components';
import { mapGetters } from 'vuex';
import tablePaginationAndSearchMixin from '~/mixins/tablePaginationAndSearchMixin';

export default {
  name: 'StarterPage',

  components: {
    BasePagination,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  mixins: [tablePaginationAndSearchMixin],
  layout: 'default',

  data() {
    return {
      propsToSearch: ['name'],
      tableColumns: [
        {
          prop: 'number',
          label: this.$t('userList.columns.number.label'),
          minWidth: 8,
          sortable: true,
          // 1580
          // 3.8%
          // 60
        },
        {
          prop: 'id',
          label: this.$t('userList.columns.id.label'),
          minWidth: 7.8,
          sortable: true,
          // 7.8%
          // 123
        },
        {
          prop: 'email',
          label: this.$t('userList.columns.email.label'),
          minWidth: 13,
          sortable: true,
          // 13%
          // 206
        },
        {
          prop: 'signedUp',
          label: this.$t('userList.columns.signedUp.label'),
          minWidth: 13,
          sortable: true,
          // 13%
          // 206
        },
        {
          prop: 'purchased',
          label: this.$t('userList.columns.purchased.label'),
          minWidth: 13,
          sortable: true,
          // 13%
          // 206
        },
        {
          prop: 'whitelist',
          label: this.$t('userList.columns.whitelist.label'),
          minWidth: 8.2,
          sortable: true,
          // 8.2%
          // 130
        },
        {
          prop: 'affiliation',
          label: this.$t('userList.columns.affiliation.label'),
          minWidth: 13,
          sortable: true,
          // 13%
          // 206
        },
        {
          prop: 'profile',
          label: '',
          minWidth: 14.8,
          sortable: false,
          // 10.8%
          // 170
        },
      ],
      badges: [
        {
          id: 0,
          label: this.$t('userList.badges.all.label'),
          active: true,
        },
        {
          id: 1,
          label: this.$t('userList.badges.notConfirm.label'),
          active: false,
        },
        {
          id: 2,
          label: this.$t('userList.badges.discount.label'),
          active: false,
        },
        {
          id: 3,
          label: this.$t('userList.badges.noDeposit.label'),
          active: false,
        },
        {
          id: 4,
          label: this.$t('userList.badges.deposit.label'),
          active: false,
        },
        {
          id: 5,
          label: this.$t('userList.badges.notSuccessful.label'),
          active: false,
        },
        {
          id: 6,
          label: this.$t('userList.badges.successful.label'),
          active: false,
        },
        {
          id: 7,
          label: this.$t('userList.badges.notFinished.label'),
          active: false,
        },
        {
          id: 8,
          label: this.$t('userList.badges.wlApp.label'),
          active: false,
        },
        {
          id: 9,
          label: this.$t('userList.badges.whitelisted.label'),
          active: false,
        },
        {
          id: 10,
          label: this.$t('userList.badges.notWl.label'),
          active: false,
        },
        {
          id: 11,
          label: this.$t('userList.badges.wlUSA.label'),
          active: false,
        },
        {
          id: 12,
          label: this.$t('userList.badges.wlUSAbyUs.label'),
          active: false,
        },
        {
          id: 13,
          label: this.$t('userList.badges.registeredUSA.label'),
          active: false,
        },
      ],
      users: {
        totalCount: 325347326,
      },
      localization: {
        inputs: {
          search: {
            placeholder: this.$t('userList.search.placeholder'),
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      tableData: 'users/getUserList',
    }),
  },
  methods: {
    setBadgeIsActive(badge, payload) {
      badge.active = payload;
    },
  },
};
</script>
<style lang="scss">
.list {
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  @media screen and (max-width: 1199px) {
    max-width: 100%;
  }
  max-width: calc(100vw - 340px);
  float: right;
  &__content {
    background-color: #22262F;
  }

  &__table {
    width: 100%;
    @media screen and (max-width: 1199px) {
      width: 1580px;
    }
  }

  &__scroll {
    width: 100%;
    overflow: unset;
    margin-bottom: 20px;
    @media screen and (max-width: 1199px) {
      overflow: scroll;
    }
  }
  &__footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__table-header {
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    color: #7C7C85;
  }

  &__checkbox {
    background-color: #3C424F;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    &_checked {
      background-color: #19CB60;
    }
    &_input {
      display: none;
    }
  }
  &__cell {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    color: #fff;
    &_signed {
      color: #868690;
    }
  }
  &__button {
    @media screen and (max-width: 1280px) {
      font-size: 8px;
      line-height: 8px;
      font-weight: 400;
      padding: 0 5px
    }
    @media screen and (max-width: 1440px) {
      font-size: 12px;
      line-height: 8px;
      font-weight: 400;
      padding: 0 25px
    }
    @media screen and (max-width: 1340px) {
      font-size: 10px;
      line-height: 8px;
      font-weight: 400;
      padding: 0 20px
    }
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #5B9490;
    border: 1px solid #5B9490;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0;
    padding: 0 28px;
    border-radius: 7px;
    &:hover {
      color: #fff;
      background-color: #5B9490;
    }
  }
}

</style>

<style scoped lang="scss">
.kycStatus-green {
  color: #96BFBC;
}

.kycStatus-red {
  color: indianred;
}

.list__pagination-selector {
  width: 95px;
}

.badges{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  &__single {
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 100px;
    margin: 0 10px 10px 0;
    padding: 0 8px;
    border: 1px solid #81B2AE;
    outline: none;
    span {
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0;
      color: #81B2AE;
    }
    &_active {
      justify-content: space-between;
      background-color: #81B2AE;
      cursor: default;
      span {
        color: #fff;
        margin-right: 7px;
      }
    }
  }
  &__icon {
    height: 7px;
    width: 7px;
    color: #fff;
    cursor: pointer;
  }
}

.export {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5B9490;
  border: 1px solid #5B9490;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0;
  padding: 0 29px;
  border-radius: 7px;
  img {
    width: 14px;
    height: 20px;
    margin-right: 10px;
    fill: #fff;
    stroke: #fff;
  }
  span {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0;
    text-align: center;
  }
  //&:hover {
  //  background-color: transparent;
  //  img {
  //    fill: #5B9490;
  //  }
  //  span {
  //    color: #5B9490;
  //  }
  //}
}

</style>
