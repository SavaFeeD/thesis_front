<script>
import { Bar, mixins } from 'vue-chartjs';

export default {
  name: 'StakedBarChart',
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: [Object, Array],
      default() {
        return [];
      },
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data: () => ({
  }),
  mounted() {
    this.$watch(
      'chartData',
      (newVal, oldVal) => {
        if (!oldVal) {
          this.renderChart(this.chartData, this.options);
        }
      },
      { immediate: true },
    );
  },
};
</script>
