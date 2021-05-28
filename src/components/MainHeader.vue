<template>
  <div class="header-box">
    <div class="title-box">
      <i
        v-if="isCollapse"
        @click="onClickFold"
        class="el-icon-s-fold"
        style="font-size: 24px"
      ></i>
      <i
        v-if="!isCollapse"
        @click="onClickFold"
        class="el-icon-s-unfold"
        style="font-size: 24px"
      ></i>
      <div class="title">system name ~</div>
    </div>

    <div class="avatar-box">
      <el-avatar
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      ></el-avatar>
      <div class="name">李松庭</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  emits: ["onClickFold"],
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    onClickFold() {
      this.isCollapse = !this.isCollapse;
      this.$emit("onClickFold", this.isCollapse);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background: #409eff;
  color: white;
  font-weight: bold;
  .title-box {
    display: flex;
    align-items: center;
    .title {
      margin-left: 20px;
    }
  }
  .avatar-box {
    display: flex;
    align-items: center;
    padding: 0 20px;
    .name {
      margin-left: 10px;
    }
  }
}
</style>
