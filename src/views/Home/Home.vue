<template>
  <div class="main-content w100">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="mt10">welcome to 花伍鲜花交易系统 ~ {{ userName }}</div>
<!--    <div style="display: flex; align-items: center; margin-top: 10px">-->
<!--      <div style="margin-right: 10px">颜色</div>-->
<!--      <el-color-picker v-model="color1"></el-color-picker>-->
<!--    </div>-->
<!--    <test-component v-model:test="homeTest"></test-component>-->
<!--    <div>homeTest &#45;&#45; {{ homeTest }}</div>-->
  </div>
</template>

<script>
// import TestComponent from "@/components/testComponent/TestComponent";
export default {
  name: "Home",
  // components: { TestComponent },
  data() {
    return {
      color1: "#2a7e35",
      homeTest: false,
    };
  },
  computed: {
    userName() {
      // 模块state
      return this.$store.state.user.userName;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  padding: 20px;
}
</style>
