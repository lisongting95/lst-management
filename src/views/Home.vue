<template>
  <div class="main-content">
    <div>
      welcome to 花伍鲜花交易系统 ~
    </div>
    <div style="display: flex; align-items: center; margin-top: 10px">
      <div style="margin-right: 10px">颜色</div>
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      color1: "#2a7e35",
    };
  },
};
</script>

<style lang="scss" scoped>
.main-content{
  padding: 20px;
}
</style>
