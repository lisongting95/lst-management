<template>
  <div class="page">
    <div class="content">
      <div class="title">花伍鲜花交易系统</div>
      <div class="login-box">
        <div class="input-box">
          <div class="tip">账号：</div>
          <el-input placeholder="请输入账号" v-model="account"></el-input>
        </div>
        <div class="input-box">
          <div class="tip">密码：</div>
          <el-input
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
        </div>
        <div class="btn-box">
          <el-button @click="onClickLogin" type="primary" style="width: 100%"
            >登录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    onClickLogin() {
      this.$store.commit("setToken", true);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100vw;
  height: 100vh;
  background: #d2d6de;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 200px;
    .title {
      font-size: 30px;
      font-weight: bold;
      color: #333333;
    }
    .login-box {
      background: #ffffff;
      padding: 30px 30px 20px 30px;
      margin-top: 10px;
      width: 300px;
      .input-box {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        .tip {
          width: 80px;
        }
      }
      .btn-box {
        margin-top: 10px;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
