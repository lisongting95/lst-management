<template>
  <div class="header-box">
    <div class="title-box">
      <div @click="onClickFold">
        <i v-if="collapse" class="el-icon-s-fold"></i>
        <i v-if="!collapse" class="el-icon-s-unfold"></i>
      </div>
      <div class="title">system name ~</div>
    </div>

    <div class="avatar-box">
      <el-avatar
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      ></el-avatar>
      <div class="name">{{ userName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  props: {
    collapse: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    onClickFold() {
      this.$emit("update:collapse", !this.collapse);
    },
  },
  computed: {
    userName() {
      //使用命名空间
      return this.$store.getters["user/getUserInfo"].name;
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
    font-size: 24px;
    .title {
      margin-left: 20px;
      font-size: 20px;
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
