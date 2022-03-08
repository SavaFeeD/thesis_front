<template>
  <div class="pieChartInfoCard">

    <h4 class="card-title align-items-center d-flex">
      <div class="pieChartInfoCard__dot" :style="`background-color: ${this.bgColor}`"/> {{ label.toUpperCase() }}
    </h4>
  </div>
</template>

<script>
export default {
  name: "pieChartInfoCard",
  props: {
    label: {
      type: String,

    },
    bgColor: {
      type: String,

    }
  }
}
</script>

<style scoped lang="scss">
.pieChartInfoCard {
  &__dot {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    display: inline-block;
    margin-right: 12px;
  }
}
</style>
