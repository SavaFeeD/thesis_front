<template>
  <div class="content chn-statistic">
    <div class="row">
      <div class="col-12 chn-statistic__dashboard-header dashboard-header d-flex justify-content-between align-items-center w-100">
        <h1 class="dashboard-header__title d-flex align-items-center">
          {{ $t('dashboard.header.title') }} #1
          <span class="dashboard-header__title-date">
            14 Jule 2021-14 Jule 2021
          </span>
        </h1>
        <base-button
          tag="button"
          class="chn-statistic__btn-download"
        >
          <img
            src="~/assets/img/dashboard/download_icon.svg"
            alt="download_icon"
            class="chn-statistic__btn-download-img"
          >
          {{ $t('dashboard.ui.btnExportFullData') }}
        </base-button>
      </div>
    </div>

    <div class="row mb-3">
      <div
        class="col-12 chn-statistic__cards-stats"
      >
        <stats-card
          v-for="(card, i) in statsCards"
          :key="`card-stats-${i}`"
          :title="card.title"
          :img="card.img"
          :card-value="card.cardValue"
          :color="card.color"
          :updated-at="card.updatedAt"
        />
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-12">
        <div class="chn-statistic__section">
          <div class="d-flex justify-content-between">
            <div class="chn-statistic__wrap-card-title">
              <h5 class="chn-statistic__card-title">
                {{ $t('dashboard.CHNPurchased') }}
              </h5>
              <div class="chn-statistic__purchased-data">
                <img
                  src="~/assets/img/dashboard/chn_white_icon.svg"
                  alt="chn_white_icon"
                >
                <span>{{ getChnPurchasedChartValue() }}</span>
              </div>
            </div>
            <base-button
              tag="button"
              class="chn-statistic__btn-download"
            >
              <img
                src="~/assets/img/dashboard/download_icon.svg"
                alt="download_icon"
                class="chn-statistic__btn-download-img"
              >
              {{ $t('dashboard.ui.btnExport') }}
            </base-button>
          </div>
          <el-select
            v-model="CHNPurchasedChartCategoriesIndex"
            class="select-primary chn-statistic__select"
          >
            <el-option
              v-for="(item, index) in chnPurchasedChartCategories"
              :key="item"
              class="select-primary"
              :label="item"
              :value="index"
            />
          </el-select>
          <div class="card-chart__chart-area">
            <line-chart
              ref="CHNPurchasedChart"
              style="height: 100%"
              :chart-data="CHNPurchasedLineChart.chartData"
              :gradient-colors="CHNPurchasedLineChart.gradientColors"
              :gradient-stops="CHNPurchasedLineChart.gradientStops"
              :extra-options="CHNPurchasedLineChart.extraOptions"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="chn-statistic__section">
          <div class="d-flex">
            <div class="d-flex justify-content-between align-items-center w-100">
              <div class="chn-statistic__wrap-card-title">
                <h5 class="chn-statistic__card-title">
                  {{ $t('dashboard.totalCHNSold') }}
                </h5>
                <div class="chn-statistic__purchased-data">
                  <img
                    src="~/assets/img/dashboard/chn_white_icon.svg"
                    alt="chn_white_icon"
                  >
                  <span>{{ getChnTotalSoldChartValue() }}</span>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <date-picker
                  v-model="datePicker"
                  class="chn-statistic__dataRange"
                  placeholder="Period Picker"
                  range
                />
                <div
                  class="btn-group btn-group-toggle"
                  :class="isRTL ? 'float-left' : 'float-right'"
                  data-toggle="buttons"
                >
                  <label
                    v-for="(option, index) in CHNTotalSoldChartCategories"
                    :id="index"
                    :key="option"
                    class="btn btn-sm btn-primary btn-simple"
                    :class="{ active: CHNTotalSoldBarChart.activeIndex === index }"
                  >
                    <input
                      type="radio"
                      name="options"
                      autocomplete="off"
                      :checked="CHNTotalSoldBarChart.activeIndex === index"
                      @click="initCHNTotalSoldChart(index)"
                    >
                    <span class="d-none d-sm-block">{{ option }}</span>
                    <span class="d-block d-sm-none">{{ option }}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="chart-area">
            <stacked-bar-chart
              ref="CHNTotalSoldChart"
              :chart-data="CHNTotalSoldBarChart.chartData"
              :options="CHNTotalSoldBarChart.options"
              :height="500"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="chn-statistic__wrap">
          <div class="chn-statistic__section">
            <div class="chn-statistic__wrap-card-title d-flex justify-content-between">
              <h5 class="chn-statistic__card-title">
                {{ $t('dashboard.trancheProgress') }}
              </h5>
              <base-button
                tag="button"
                class="chn-statistic__btn-download"
              >
                <img
                  src="~/assets/img/dashboard/download_icon.svg"
                  alt="download_icon"
                  class="chn-statistic__btn-download-img"
                >
                {{ $t('dashboard.ui.btnExport') }}
              </base-button>
            </div>
            <div class="chn-statistic__select">
              <el-select
                v-model="trancheProgressIndex"
                class="select-primary"
              >
                <el-option
                  v-for="(item, index) in trancheProgressCategories"
                  :key="item"
                  class="select-primary"
                  :label="item"
                  :value="index"
                />
              </el-select>
            </div>
            <div class="chn-statistic__tranche-total-sold">
              <label>
                {{ $t('dashboard.totalSold') }}
              </label>
              <base-progress
                :value="trancheProgressTotalSold.progress"
              />
              <div class="d-flex justify-content-between align-items-center">
                <span>{{ trancheProgressTotalSold.total }} CHN</span>
                <span class="text-left">{{ trancheProgressTotalSold.left }} CHN left</span>
              </div>
            </div>
            <div class="d-flex flex-column w-100">
              <div
                v-for="(item, i) in trancheProgressList"
                :key="`tranche-progress-${i}`"
                class="chn-statistic__progress"
              >
                <label class="chn-statistic__progress-label">
                  <img
                    :src="require(`~/assets/img/dashboard/currency/${item.img}`)"
                    alt="tranche-progress"
                    class="img"
                  >
                  {{ item.name }}
                </label>
                <base-progress
                  value-position="right"
                  :value="item.progress"
                />
                <span class="chn-statistic__currency-sold">
                  {{ item.sold }}
                  {{ item.currency }}
                </span>
              </div>
            </div>
          </div>
          <div class="chn-statistic__section">
            <div class="chn-statistic__wrap-card-title d-flex justify-content-between">
              <h5 class="chn-statistic__card-title">
                {{ $t('dashboard.transactions') }}
              </h5>
              <base-button
                tag="button"
                class="chn-statistic__btn-download"
              >
                {{ $t('dashboard.ui.addTransaction') }}
              </base-button>
            </div>
            <div class="d-flex justify-content-between align-items-end">
              <div class="chn-statistic__select">
                <el-select
                  v-model="transactionCategoryIndex"
                  class="select-primary mb-3"
                >
                  <el-option
                    v-for="(item, i) in transactionCategories"
                    :key="item"
                    class="select-primary"
                    :label="item"
                    :value="i"
                  />
                </el-select>
              </div>
              <div class="chn-statistic__search">
                <base-input>
                  <el-input
                    v-model="transactionSearchQuery"
                    type="search"
                    class="search-input"
                    prefix-icon="tim-icons icon-zoom-split"
                    placeholder="Search"
                    aria-controls="datatables"
                  />
                </base-input>
              </div>
            </div>

            <el-table
              :data="queriedData"
              fit
              size="large"
            >
              <el-table-column
                min-width="40"
                prop="id"
                label="#"
                sortable
              >
                <template #default="{row}">
                  <div class="align-items-center d-flex flex-row">
                    <nuxt-link
                      to="/user-page"
                      class="font-weight-500"
                    >
                      {{ row.id }}
                    </nuxt-link>
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                min-width="100"
                prop="coin"
                label="coin"
                sortable
                label-class-name="user-list__table-header"
              >
                <template #default="{row}">
                  <div class="align-items-center d-flex flex-row">
                    <img
                      :src="require(`~/assets/img/dashboard/currency/${row.coin.img}`)"
                      alt="coin"
                      class="chn-statistic__table-coin-img"
                    >
                    {{ row.coin.name }}
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                v-for="column in tableColumns"
                :key="column.label"
                :min-width="column.minWidth"
                :prop="column.prop"
                :label="column.label"
                sortable
              >
                <template #default="{row}">
                  <div class="align-items-center d-flex flex-row">
                    <span class="font-weight-500">
                      {{ row[column.prop] }}
                    </span>
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                min-width="150"
                prop="user"
                label="User"
              >
                <template #default="{row}">
                  <div class="align-items-center d-flex flex-row">
                    <nuxt-link
                      to="/user-page"
                      class="font-weight-500"
                    >
                      {{ row.user }}
                    </nuxt-link>
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                min-width="100"
                prop="export"
                label=""
              >
                <template #default="">
                  <div class="align-items-center d-flex flex-row">
                    <base-button
                      tag="button"
                      class="chn-statistic__btn-download"
                    >
                      <img
                        src="~/assets/img/dashboard/download_icon.svg"
                        alt="download_icon"
                        class="chn-statistic__btn-download-img"
                      >
                      {{ $t('dashboard.ui.btnExport') }}
                    </base-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
            <div class="d-flex justify-content-center">
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
  </div>
</template>

<script>
import {
  Option, Select, Table, TableColumn,
} from 'element-ui';
import { BasePagination } from '@/components';
import BaseProgress from '@/components/BaseProgress';
import LineChart from '@/components/Charts/LineChart';
import * as chartConfigs from '@/components/Charts/config';
import config from '@/config';
import { mapGetters } from 'vuex';
import StatsCard from '@/components/Cards/StatsCard';
import DatePicker from 'vue2-datepicker';
import StackedBarChart from '~/components/Charts/StackedBarChart';
import tablePaginationAndSearchMixin from '~/mixins/tablePaginationAndSearchMixin';
import 'vue2-datepicker/index.css';

const CHNPurchasedChartLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const CHNPurchasedChartDatasetOptions = {
  fill: true,
  borderColor: config.colors.primary,
  borderWidth: 2,
  borderDash: [],
  borderDashOffset: 0.0,
  pointBackgroundColor: config.colors.primary,
  pointBorderColor: 'rgba(255,255,255,0)',
  pointHoverBackgroundColor: config.colors.primary,
  pointBorderWidth: 20,
  pointHoverRadius: 4,
  pointHoverBorderWidth: 15,
  pointRadius: 4,
};

const CHNTotalSoldChartDatasetOptions = {
  fill: true,
};
const CHNTotalSoldChartOptions = {
  responsive: true,
  legend: {
    display: false,
  },
  maintainAspectRatio: false,
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest',
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
    yAxes: [
      {
        gridLines: {
          drawBorder: false,
          color: 'rgba(129,178,174,0.24)',
          zeroLineColor: 'rgba(129,178,174,0.24)',
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          fontSize: 14,
          fontColor: '#FFFFFF',
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          drawBorder: false,
          color: 'rgba(129,178,174,0.24)',
          zeroLineColor: 'rgba(129,178,174,0.24)',
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          fontSize: 14,
          fontColor: '#FFFFFF',
        },
      },
    ],
  },
};

export default {
  name: 'Dashboard',
  components: {
    BaseProgress,
    StackedBarChart,
    LineChart,
    StatsCard,
    [Select.name]: Select,
    [Option.name]: Option,
    BasePagination,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    DatePicker,
  },
  mixins: [tablePaginationAndSearchMixin],
  layout: 'default',

  data() {
    return {
      datePicker: '',
      tableColumns: [
        {
          prop: 'totalTransfer',
          label: 'Total Transfer',
          minWidth: 120,
        },
        {
          prop: 'chnAmount',
          label: 'CHN Amount',
          minWidth: 120,
        },
      ],
      trancheProgressIndex: 0,
      transactionCategoryIndex: 0,
      CHNPurchasedChartCategoriesIndex: 0,
      CHNTotalSoldChartCategoriesIndex: 0,
      transactionSearchQuery: '',
      CHNPurchasedLineChart: {
        chartData: {
          datasets: [{
            ...CHNPurchasedChartDatasetOptions,
          }],
          labels: CHNPurchasedChartLabels,
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: [],
        activeIndex: 0,
      },
      CHNTotalSoldBarChart: {
        chartData: {
          datasets: [{
            ...CHNTotalSoldChartDatasetOptions,
          }],
          labels: [],
        },
        options: CHNTotalSoldChartOptions,
        categories: [],
      },
      statsCards: [
        {
          title: this.$t('dashboard.statsCards.totalCHNSupplyLef.title'),
          img: 'total_supply.svg',
          cardValue: '165578849',
          color: '#96BFBC',
          updatedAt: '12 July 15:34',
        },
        {
          title: this.$t('dashboard.statsCards.totalCHNSupplySold.title'),
          img: 'totalSupplySold.svg',
          cardValue: '165578849',
          color: '#E53882',
          updatedAt: '12 July 15:34',
        },
        {
          title: `${this.$t('dashboard.statsCards.totalRaised.title')} $:`,
          img: 'total_raised.svg',
          cardValue: '165578849',
          color: '#CECECE',
          updatedAt: '12 July 15:34',
        },
        {
          title: `${this.$t('dashboard.statsCards.numberOfParticipants.title')}:`,
          img: 'number_part.svg',
          cardValue: '165$',
          color: '#A9D9E3',
          updatedAt: '12 July 15:34',
        },
        {
          title: `${this.$t('dashboard.statsCards.averagePurchase.title')}:`,
          img: 'average.svg',
          cardValue: '165578849',
          color: '#EECB69',
          updatedAt: '12 July 15:34',
        },
        {
          title: this.$t('dashboard.statsCards.currentPrice.title'),
          img: 'current_price.svg',
          cardValue: '165578849',
          color: '#A9D9E3',
          updatedAt: '12 July 15:34',
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      getChnPurchasedChartData: 'statistic/getChnPurchasedChartData',
      getChnPurchasedChartValue: 'statistic/getChnPurchasedChartValue',
      getChnTotalSoldChartData: 'statistic/getChnTotalSoldChartData',
      getChnTotalSoldChartValue: 'statistic/getChnTotalSoldChartValue',
      getChnTotalSoldChartLabel: 'statistic/getChnTotalSoldChartLabel',
      getChnTotalSoldChartDataLabel: 'statistic/getChnTotalSoldChartDataLabel',
      getTrancheProgress: 'statistic/getTrancheProgress',
      getTrancheProgressTotalSold: 'statistic/getTrancheProgressTotalSold',
      getTransactionList: 'statistic/getTransactionList',
    }),

    enableRTL() {
      return this.$route.query.enableRTL;
    },

    isRTL() {
      return this.$rtl.isRTL;
    },

    CHNTotalSoldChartCategories() {
      return this.$store.state.statistic.chnTotalSoldChartCategories;
    },

    chnPurchasedChartCategories() {
      return this.$store.state.statistic.chnPurchasedChartCategories;
    },

    tableData() {
      return this.getTransactionList(this.transactionCategoryIndex);
    },

    trancheProgressList() {
      return this.getTrancheProgress(this.trancheProgressIndex);
    },

    trancheProgressCategories() {
      return this.$store.state.statistic.trancheProgress.categories;
    },

    trancheProgressTotalSold() {
      return this.getTrancheProgressTotalSold(this.trancheProgressIndex);
    },

    transactionCategories() {
      return this.$store.state.statistic.transaction.categories;
    },
  },
  created() {
    this.initCHNTotalSoldChart(this.CHNTotalSoldChartCategoriesIndex);
  },
  mounted() {
    this.pagination.perPage = 11;
    this.$watch(
      'CHNPurchasedChartCategoriesIndex',
      (newData, oldData) => {
        if (oldData !== newData) {
          this.initCHNPurchasedChart(this.CHNPurchasedChartCategoriesIndex);
        }
      },
      { immediate: true },
    );
  },

  methods: {
    initCHNPurchasedChart(index) {
      const chartData = {
        datasets: [{
          ...CHNPurchasedChartDatasetOptions,
          data: this.getChnPurchasedChartData(index),
        }],
        labels: CHNPurchasedChartLabels,
      };
      this.$refs.CHNPurchasedChart.updateGradients(chartData);
      this.CHNPurchasedLineChart.chartData = chartData;
      this.CHNPurchasedLineChart.activeIndex = index;
    },
    initCHNTotalSoldChart(index) {
      this.CHNTotalSoldBarChart.chartData = {
        datasets: [
          {
            ...CHNTotalSoldChartDatasetOptions,
            data: this.getChnTotalSoldChartData(index, 0),
            label: this.getChnTotalSoldChartDataLabel(index, 0),
            backgroundColor: '#FF9960',
            stack: 'Stack 0',
          },
          {
            ...CHNTotalSoldChartDatasetOptions,
            data: this.getChnTotalSoldChartData(index, 1),
            label: this.getChnTotalSoldChartDataLabel(index, 1),
            backgroundColor: '#F7F7F7',
            stack: 'Stack 0',
          },
          {
            ...CHNTotalSoldChartDatasetOptions,
            data: this.getChnTotalSoldChartData(index, 2),
            label: this.getChnTotalSoldChartDataLabel(index, 2),
            backgroundColor: '#FFDC66',
            stack: 'Stack 0',
          },
          {
            ...CHNTotalSoldChartDatasetOptions,
            data: this.getChnTotalSoldChartData(index, 3),
            label: this.getChnTotalSoldChartDataLabel(index, 3),
            backgroundColor: '#FF6A6A',
            stack: 'Stack 0',
          },
          {
            ...CHNTotalSoldChartDatasetOptions,
            data: this.getChnTotalSoldChartData(index, 4),
            label: this.getChnTotalSoldChartDataLabel(index, 4),
            backgroundColor: '#6FA688',
            stack: 'Stack 0',
          },
          {
            ...CHNTotalSoldChartDatasetOptions,
            data: this.getChnTotalSoldChartData(index, 5),
            label: this.getChnTotalSoldChartDataLabel(index, 5),
            backgroundColor: '#6889DD',
            stack: 'Stack 0',
          },
          {
            ...CHNTotalSoldChartDatasetOptions,
            data: this.getChnTotalSoldChartData(index, 6),
            label: this.getChnTotalSoldChartDataLabel(index, 6),
            backgroundColor: '#FFDF70',
            stack: 'Stack 0',
          },
          {
            ...CHNTotalSoldChartDatasetOptions,
            data: this.getChnTotalSoldChartData(index, 7),
            label: this.getChnTotalSoldChartDataLabel(index, 7),
            backgroundColor: '#4D7EFF',
            stack: 'Stack 0',
          },
        ],
        labels: this.getChnTotalSoldChartLabel(index),
      };
      this.CHNTotalSoldBarChart.activeIndex = index;
    },
  },
};

</script>

<style lang="scss">
.chn-statistic {
  &__wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    margin-top: 20px;
  }
  &__section {
    background: #22262F;
    border-radius: 5px;
    padding: 15px;
  }
  &__btn-download {
    height: 40px;
    padding: 0 13px;
    background: #5B9490;
    &:hover {
      background: #6CA5A1!important;
      box-shadow: none!important;
      transform: none!important;
    }
    &:active {
      background: #6CA5A1!important;
      box-shadow: none!important;
      transform: none!important;
    }
    &:focus {
      background: #6CA5A1!important;
      box-shadow: none!important;
      transform: none!important;
    }
  }
  &__btn-download-img {
    height: 20px;
    width: 14px;
    margin: 0 10px 0 0;
  }
  &__cards-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
  }
  &__wrap-card-title {
    margin-bottom: 20px;
  }
  &__card-title {
    font-size: 17px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    margin: 0 0 8px 0;
  }
  &__purchased-data {
    font-size: 27px;
    line-height: 33px;
    color: #FFFFFF;
  }
  &__tranche-total-sold {
    padding: 15px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    background: #272C36;
    border: 1px solid #303540;
    border-radius: 4px;
    color: #FFFFFF;
    .text-left {
      color: #747A86;
      margin: 15px 0 0 0;
    }
  }
  &__select {
    max-width: 169px;
    height: 44px;
    background: #303540;
    border: 1px solid #3C424F;
    border-radius: 4px;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 20px;
    & * {
      height: 44px;
    }
  }
  &__search {
    width: 253px;
    margin-bottom: 10px;
    .search-input {
      & * {
        height: 44px;
      }
    }
  }
  &__progress-label {
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    margin-top: 20px;
    .img {
      width: 20px;
      height: 20px;
      margin: 0 5px 0 0;
    }
  }
  &__currency-sold {
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
  }
  &__table-coin-img {
    width: 20px;
    height: 20px;
    margin: 0 10px 0 0;
  }
  &__dataRange {
    width: 498px;
    margin: 6px 20px 0 0;
    &::placeholder {
      color: #898B8F!important;
    }
    input {
      color: #FFFFFF!important;
      border: 1px solid #303540;
      background: none!important;
    }
    i {
      color: #5B616C!important;
    }
  }
}

.dashboard-header {
  margin-bottom: 20px;
  &__title {
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    margin: 0;
  }
  &__title-date {
    margin-left: 15px;
    font-size: 16px;
    line-height: 20px;
    color: #969CA8;
  }
}

.mx-datepicker-main {
  th {
    color: #6CA5A1;
  }
  td {
    &.active {
      background: #6CA5A1!important;
      border-radius: 50px;
    }
    &.in-range {
      background: none!important;
      div {
        background: rgba(108, 165, 161, 0.16) !important;
      }
    }
  }
}
.mx-btn {
  color: #6CA5A1;
}
</style>
