<template>
  <div class="about">
    <h1>{{ stateText }}</h1>
  </div>
</template>
<script>
// import model from "@/api/model";
export default {
  async mounted() {
    let res = await this.$model.login({
      mobile: "18669010827",
      password: "123456",
      type: "password",
    });
    console.log("login res --->", res);
  },
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
