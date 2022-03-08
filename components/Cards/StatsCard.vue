<template>
  <div class="card-stats">
    <div class="card-stats__content">
      <div class="">
        <div
          class="card-stats__bg-image"
          :style="`background: ${color}`"
        >
          <img
            :src="require(`~/assets/img/dashboard/card-stats/${img}`)"
            alt="icon"
            class="card-stats__image"
          >
        </div>
      </div>
      <div class="card-stats__info">
        <h5 class="card-stats__title">
          {{ title }}
        </h5>
        <p class="card-stats__cardValue">
          {{ cardValue }}
        </p>
      </div>
    </div>
    <div class="card-stats__footer">
      <img
        src="~/assets/img/dashboard/card-stats/refresh.svg"
        alt="updateAt"
      >
      <p class="card-stats__updatedAt">
        {{ $t('dashboard.statsCards.updateAt') }}
        {{ updatedAt }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StatsCard',
  props: {
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    cardValue: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    updatedAt: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
.card-stats {
  border-radius: 5px;
  background: #22262F;
  padding: 15px;
  &__content{
    display: flex;
  }
  &__bg-image {
    width: 52px;
    height: 52px;
    margin: 0 10px 0 0;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  &__title {
    margin: 0 0 5px 0;
    padding: 0;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #A9AFBB;
  }
  &__cardValue {
    margin: 0;
    padding: 0;
    font-size: 25px;
    line-height: 30px;
    text-align: right;
    color: #FFFFFF;
  }
  &__footer {
    margin: 13px 0 0 0;
    padding: 14px 0 0 0;
    border-top: 1px solid #747A86;
    display: flex;
    align-items: center;
  }
  &__updatedAt {
    font-size: 12px;
    line-height: 15px;
    color: #747A86;
    margin: 0 0 0 8px;
  }
}

</style>
