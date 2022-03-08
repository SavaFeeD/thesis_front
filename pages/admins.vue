<template>
  <div class="list">
    <div class="row">
      <div class="col-12">
        <div class="card list__content">
          <div class="card-header">
            <div class="card-title">
              <h4>{{ $t("admin.title") }}</h4>
            </div>
            <button
              class="export"
              type="button"
              @click="openAddModal()"
            >
              <img
                alt=""
                src="~/assets/img/icons/bottom_arrow.svg"
                class="icon"
              >
              <span>{{ $t("admin.buttons.add") }}</span>
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
                      v-if="column.prop === 'status'"
                      class="align-items-center d-flex flex-row"
                    >
                      <div :class="changeBadgeColor(row.status)">
                        {{ changeStatusText(row.status) }}
                      </div>
                    </div>
                    <div
                      v-else-if="column.prop === 'change'"
                      class="align-items-center d-flex flex-row"
                    >
                      <button
                        class="list__button"
                        type="button"
                        @click="openChangeModal(row.id)"
                      >
                        {{ $t("admin.buttons.change") }}
                      </button>
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
            <base-pagination
              v-model="pag.currentPage"
              class="pagination-no-border"
              :per-page="pag.perPage"
              :total="pag.total"
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
      pag: {
        currentPage: 1,
        total: 0,
        perPage: 5,
        perPageOptions: [5, 10, 15, 20],
      },
      propsToSearch: ['name'],
      tableColumns: [
        {
          prop: 'id',
          label: this.$t('admin.columns.number.label'),
          minWidth: 13,
          sortable: true,
        },
        {
          prop: 'email',
          label: this.$t('admin.columns.email.label'),
          minWidth: 13,
          sortable: true,
        },
        {
          prop: 'permission',
          label: this.$t('admin.columns.permission.label'),
          minWidth: 7,
          sortable: true,
        },
        {
          prop: 'status',
          label: this.$t('admin.columns.status.label'),
          minWidth: 5,
          sortable: true,
        },
        {
          prop: 'change',
          label: this.$t('admin.columns.change.label'),
          minWidth: 8.2,
          sortable: false,
        },
      ],
      localization: {
        inputs: {
          search: {
            placeholder: this.$t('admin.search.placeholder'),
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      tableData: 'admin-management/adminsList',
      adminsCount: 'admin-management/adminsCount',
    }),
    offsetCalc() {
      return (this.pag.currentPage - 1) * this.pag.perPage;
    },
  },
  watch: {
    pag: {
      immediate: true,
      deep: true,
      async handler(value) {
        if (value.currentPage) {
          await this.getAdmins();
        }
      },
    },
    pagination: {
      immediate: true,
      deep: true,
      async handler(value) {
        if (value.perPage) {
          this.pag.perPage = value.perPage;
          await this.getAdmins();
        }
      },
    },
  },
  methods: {
    changeStatusText(arg) {
      const text = {
        deleted: this.$t('admin.columns.status.options.deleted'),
        postponed: this.$t('admin.columns.status.options.postponed'),
        active: this.$t('admin.columns.status.options.active'),
      };
      return text[arg];
    },
    changeBadgeColor(arg) {
      const color = {
        deleted: 'deleted',
        postponed: 'postponed',
        active: 'active',
      };
      return `list__badge list__badge_${color[arg]}`;
    },
    openAddModal() {
      this.ShowModal({
        key: 'admin-add-modal',
        title: this.$t('admin.modals.add.title'),
        description: this.$t('admin.modals.add.description'),
        limit: this.pag.perPage,
        offset: this.offsetCalc,
      });
    },
    openChangeModal(id) {
      this.ShowModal({
        key: 'admin-change-modal',
        title: this.$t('admin.modals.change.title'),
        id,
        limit: this.pag.perPage,
        offset: this.offsetCalc,
      });
    },
    async getAdmins() {
      try {
        const payload = {
          limit: this.pag.perPage,
          offset: this.offsetCalc,
        };
        await this.$store.dispatch('admin-management/getAdminsList', payload);
        this.pag.total = this.adminsCount;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped lang="scss">
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
  max-width: calc(100vw - 160px);
  width: calc(100vw - 160px);
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
  &__badge {
    height: 30px;
    padding: 5px 10px;
    border-radius: 6px;
    background-color: #A9D9E3;
    color: #13171F;
    &_active {
      background-color: #19CB60;
    }
    &_deleted {
      background-color: #FF1725;
    }
    &_postponed {
      background-color: #A9D9E3;
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

.kycStatus-green {
  color: #96BFBC;
}

.kycStatus-red {
  color: indianred;
}

.list__pagination-selector {
  width: 95px;
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
