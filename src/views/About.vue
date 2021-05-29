<template>
  <div class="about">
    <h1>{{ stateText }}</h1>
  </div>
</template>
<script>
export default {
  computed: {
    stateText() {
      return this.$store.state.stateText;
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  padding: 20px;
}
</style>
