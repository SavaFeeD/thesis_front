<template>
  <div class="content user-page">
    <div>
      <NuxtLink to="/user-list">
        <button
          class="button-back"
          type="button"
        >
          {{ $t("userPage.buttons.back") }}
        </button>
      </NuxtLink>
    </div>
    <div class="cards">
      <div class="cards__info">
        <div class="avatar-lg">
          <img
            src="~/assets/img/user-profile/avatar.png"
            alt="avatar"
          >
        </div>
        <div class="user">
          <div class="fullname">
            <span> {{ persolnalInfo.fullname }} </span>
          </div>
          <div class="email">
            <span> {{ persolnalInfo.email }} </span>
            <span class="email__status"> {{ persolnalInfo.confirm }} </span>
          </div>
          <div class="bank">
            <span class="bank__status">Whitelist</span>
            <span class="bank__status">KYC</span>
            <span class="bank__status">2FA</span>
          </div>
          <div class="reg">
            <span> {{ persolnalInfo.dateReg }} </span>
          </div>
        </div>
      </div>
      <div class="cards__data">
        <p>{{ $t("userPage.data") }}</p>
        <div class="data-list">
          <div class="cards__data-one">
            <span class="title">{{ $t("userPage.location") }}</span>
            <p class="value">
              {{ userDataInfo.location }}
            </p>
            <span class="title">{{ $t("userPage.group") }}</span>
            <p class="value">
              {{ userDataInfo.group }}
            </p>
            <span class="title">{{ $t("userPage.tier") }}</span>
            <p class="value">
              {{ userDataInfo.tier }}
            </p>
          </div>
          <div class="cards__data-two">
            <span class="title">{{ $t("userPage.discount") }}</span>
            <p class="value">
              {{ userDataInfo.discount }}%
            </p>
            <span class="title">{{ $t("userPage.sunrise") }}</span>
            <p class="value">
              {{ userDataInfo.sunrise }}
            </p>
            <span class="title">{{ $t("userPage.rest") }}</span>
            <p class="value">
              {{ userDataInfo.rest }}
            </p>
          </div>
        </div>
      </div>
      <div class="cards__token">
        <span>{{ $t("userPage.token") }}</span>
        <p class="cards__token-price">
          {{ userToken.token }} CHN
        </p>
        <span>{{ $t("userPage.purchase") }}</span>
        <p class="cards__token-price">
          $ {{ userToken.purchase }}
        </p>
      </div>
    </div>

    <!-- table -->
    <div class="card user-page__table">
<!--      <h4 class="card-title card-header">-->
<!--        {{ $t("userPage.table.title") }}-->
<!--      </h4>-->
      <div class="user-page__top">
        <div class="user-page__switch">
          <h4
              :class="{selectedSection: selectedSection === 'table'}"
              class="card-title card-header"
              @click="changeSectionOn('table')"
          >
            {{ $t("userPage.table.title") }}
          </h4>
          <h4
              :class="{selectedSection: selectedSection === 'comment'}"
              class="card-title card-header card-comment"
              @click="changeSectionOn('comment')"
          >
            {{ $t("userPage.comment.title") }}
          </h4>
        </div>
        <div
            v-if="selectedSection === 'comment'"
            class="user-page__edit-comment edit-comment"
        >
          <button
            v-if="selectedSection === 'comment' && !isCommentEditable"
            class="edit-comment__button"
            @click="toggleIsCommentEditable"
          >
            <img
            :src="require('~/assets/img/icons/edit.png')">
            {{ $t('userPage.buttons.edit') }}
          </button>
          <button
              v-if="selectedSection === 'comment' && isCommentEditable"
              class="edit-comment__button edit-comment__button_cancel"
              @click="toggleIsCommentEditable"
          >
            {{ $t('userPage.buttons.cancel') }}
          </button>
          <button
              v-if="selectedSection === 'comment' && isCommentEditable"
              class="edit-comment__button"
              @click="saveComment(newComment, userDataInfo.id)"
          >
            {{ $t('userPage.buttons.save') }}
          </button>
        </div>
      </div>
      <div>
        <!-- pagination perPage select -->
        <div
            v-if="selectedSection === 'table'"
            class="table-wrapper">
          <div class="card-parametres">
            <el-select
                v-model="pagination.perPage"
                class="
              select-primary
              mb-3
              pagination-select
              user-page__pagination-selector
            "
                placeholder="Per page"
            >
              <el-option
                  v-for="item in pagination.perPageOptions"
                  :key="item"
                  :label="item"
                  :value="item"
                  class="select-primary"
              />
            </el-select>
            <!-- search -->
            <base-input>
              <el-input
                  v-model="searchQuery"
                  aria-controls="datatables"
                  class="search-input"
                  clearable
                  placeholder="Search"
                  prefix-icon="tim-icons icon-zoom-split"
                  type="search"
              />
            </base-input>
          </div>
          <!-- table body -->
          <el-table
              :data="queriedData"
              row-class-name="user-page__table-row"
              header-row-class-name=""
              fit
              size="large"
          >
            <el-table-column
                v-for="column in tableColumns"
                :key="column.label"
                :min-width="column.minWidth"
                :prop="column.prop"
                :label="column.label"
                sortable
                label-class-name="user-page__table-header"
            >
              <template #default="{ row }">
                <div
                    v-if="column.prop === 'status'"
                    class="align-items-center d-flex flex-row"
                >
                <span
                    v-if="row[column.prop] === 'Confirmed'"
                    class="font-weight-500 status-confirm"
                >
                  {{ row[column.prop] }}
                </span>
                  <span
                      v-if="row[column.prop] === 'Rejected'"
                      class="font-weight-500 status-reject"
                  >
                  {{ row[column.prop] }}
                </span>
                  <span
                      v-if="row[column.prop] === 'Pending'"
                      class="font-weight-500 status-pending"
                  >
                  {{ row[column.prop] }}
                </span>
                </div>
                <div
                    v-else
                    class="align-items-center d-flex flex-row"
                >
                <span class="font-weight-500">
                  {{ row[column.prop] }}
                </span>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div
              slot="footer"
              class="table-footer"
          >
            <base-pagination
                v-model="pagination.currentPage"
                :per-page="pagination.perPage"
                :total="total"
                class="pagination-no-border"
            />
          </div>
        </div>
        <!--   comments page     -->
        <div
            v-if="selectedSection === 'comment'"
            class="comment-wrapper">
          <textarea
            :disabled="!isCommentEditable"
            v-model="newComment"
            :placeholder="oldComment"
            class="edit-comment__input"
            />
        </div>

        <!-- table footer -->
        </div>
    </div>

  </div>
</template>

<script>
import {
  Option, Select, Table, TableColumn,
} from 'element-ui';
import { mapGetters } from 'vuex';
import { BasePagination } from '@/components';
import tablePaginationAndSearchMixin from '~/mixins/tablePaginationAndSearchMixin';

export default {
  name: 'UserPage',
  components: {
    BasePagination,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  mixins: [tablePaginationAndSearchMixin],
  layout: 'default',

  async mounted() {
    const { result: userProfile } = await this.fetchUserPageBy(localStorage.currentUserId)
    const { firstname: firstName, lastname: lastName, email, city: location, profile, createdAt, id } = userProfile

    if (profile) this.oldComment = profile.commentAdmin
    this.userDataInfo.id = id
    this.persolnalInfo.fullname = `${firstName} ${lastName}`
    this.persolnalInfo.email = email
    this.persolnalInfo.dateReg = (new Date(createdAt)).toString()
    this.userDataInfo.location = location || this.$t('userPage.options.location.not-indicated')
  },

  data() {
    return {
      propsToSearch: ['coin'],
      tableColumns: [
        {
          prop: 'id',
          label: '#',
          minWidth: 70,
        },
        {
          prop: 'io',
          label: 'i/o',
          minWidth: 120,
        },
        {
          prop: 'txhash',
          label: 'txhash',
          minWidth: 600,
        },
        {
          prop: 'date',
          label: 'Date',
          minWidth: 200,
        },
        {
          prop: 'amount',
          label: 'Amount',
          minWidth: 120,
        },
        {
          prop: 'status',
          label: 'status',
          minWidth: 120,
        },
      ],
      persolnalInfo: {
        fullname: '',
        email: '',
        confirm: 'Confirm',
        dateReg: '',
      },
      userDataInfo: {
        location: 'UK',
        group: 'Coinomy',
        tier: 'Bronze',
        discount: '2',
        sunrise: 'Yes',
        rest: '-',
        id: ''
      },
      userToken: {
        token: '23 432',
        purchase: '600',
      },
      selectedSection: 'table',
      isCommentEditable: false,
      oldComment: 'To input your comment press edit button.',
      newComment: '',
    };
  },

  computed: {
    ...mapGetters({
      getUserStatus: 'users/getUserStatus',
    }),
    tableData() {
      return this.$store.state.userPage.transactions;
    },
    // setKvcClass() {
    //   return this.userData.kvcStatus.toUpperCase() === 'YES'
    //     ? 'user-page__kvc-yes'
    //     : 'user-page__kvc-no';
    // },
  },

  watch: {
    // getUserStatus: {
    //   immediate: true,
    //   handler(value) {
    //     this.userStatus.selected = value;
    //   },
    // },
  },

  methods: {
    async fetchUserPageBy(id) {
      return await this.$store.dispatch('admin/fetchUserProfile', { id: id })
    },
    changeSectionOn (section) {
      this.selectedSection = section
    },
    toggleIsCommentEditable () {
      this.isCommentEditable = !this.isCommentEditable
    },
    async saveComment (comment, id) {
      if (this.newComment) {
        const payload = { id: id, comment: comment.toString() }
        await this.$store.dispatch('admin/sendComment', payload)
        this.oldComment = this.newComment
      }
      this.toggleIsCommentEditable()
    }
  }
};
</script>

<style lang="scss" scoped>
.user-page {
  &__top {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  &__switch {
    display: flex;
  }
  .card-header {
    padding: 0 0 17px 0 !important;
    cursor: pointer;
    opacity: 0.3;
  }
  .card-comment {
    margin-left: 32px;
    cursor: pointer;
    opacity: 0.3;
  }
  .selectedSection {
    border-bottom: solid #6CA5A1 2px;
    opacity: 1;
  }
  .edit-comment {
    &__button {
      height: 40px;
      width: 100px;
      background: #5B9490;
      padding: 8px 13px 8px 8px;
      border-radius: 7px;
      border: 1px solid #5B9490;
      font-family: Montserrat, sans-serif;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: #FFF;
      &_cancel {
        color: #5B9490;
        background: unset;
        margin-right: 10px;
      }
    }
    &__input {
      resize: none;
      width: 50%;
      height: 400px;
      overflow-y: auto;
      background: #22262F;
      border: none;
      font-family: Montserrat, sans-serif;
      color: #FFF;
      &:disabled {
        color: #868691;
      }
    }
  }
  // margin-left: 300px;
  .button-back {
    display: inline-block;
    border: 1px solid #5b9490;
    padding: 10px 10px 10px 35px;
    border-radius: 7px;
    background-color: transparent;
    color: #5b9490;
    position: relative;
    font-weight: 600;
    &::before {
      content: url("~/assets/img/icons/arrow-left.svg");
      width: 7px;
      height: 12px;
      position: absolute;
      margin-top: 2px;
      left: 20%;
    }
  }
  .table-footer {
    display: flex;
    justify-content: center;
  }

  &__table {
    background-color: #22262f;
    padding: 20px 15px;
  }

  &__table-header {
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    color: #747a86 !important;
  }

  &__pagination-selector {
    width: 95px;
  }

  &__table-row:nth-of-type(odd) {
    background-color: #373741;
  }
  &__table-row {
    color: #fff !important;
  }

  &__table-status {
    width: 7px;
    height: 7px;
    border-radius: 7px;
  }
  .status-confirm {
    background-color: #19cb60;
    padding: 5px 10px;
    color: #13171f;
    border-radius: 6px;
  }
  .status-reject {
    background-color: #ff1725;
    padding: 5px 10px;
    color: #13171f;
    border-radius: 6px;
  }
  .status-pending {
    background-color: #f5c414;
    padding: 5px 10px;
    color: #13171f;
    border-radius: 6px;
  }
  .card-parametres {
    display: flex;
    justify-content: space-between;
    .select-primary {
      background-color: #303540;
      border: 1px solid #3c424f;
      border-radius: 4px;
    }
  }
}
</style>
