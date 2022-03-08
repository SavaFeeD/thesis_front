<template>
  <div class="login">
    <div class="login__content">
      <nuxt />
    </div>
  </div>
</template>

<script>

export default {
  middleware: 'guest',
};

</script>

<style lang="scss" scoped>

</style>
