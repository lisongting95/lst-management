<template>
  <div class="header-box">
    <div class="title-box">
      <div @click="onClickFold">
        <i v-if="collapse" class="el-icon-s-fold"></i>
        <i v-if="!collapse" class="el-icon-s-unfold"></i>
      </div>
      <div class="title">花伍鲜花交易系统</div>
    </div>

    <div class="avatar-box">
      <div class="name">你好，{{ userName }}</div>
      <el-dropdown @command="onClickMenu">
        <div>
          <el-avatar
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          ></el-avatar>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="setting">设置</el-dropdown-item>
            <el-dropdown-item command="logout">注销</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
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
    onClickMenu(command) {
      if (command === "logout") {
        this.$store.commit("user/setToken", null);
        this.$router.push({ name: "Login" });
      }
    },
  },
  computed: {
    userName() {
      //使用命名空间
      return this.$store.state.user.userName;
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
}
.avatar-box {
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.name {
  margin-right: 20px;
  color: #ffffff;
}
</style>
