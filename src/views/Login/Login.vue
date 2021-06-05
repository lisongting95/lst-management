<template>
  <div class="page">
    <div class="content">
      <div class="title">花伍鲜花交易系统</div>
      <div class="login-box">
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          label-width="50px"
          label-position="left"
        >
          <el-form-item label="账号:" prop="mobile">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
        </el-form>
        <div class="btn-box">
          <el-button @click="onClickLogin" type="primary" style="width: 100%">
            登录
          </el-button>
        </div>
        <div class="flex flex-row-right mt20 mr10">
          <el-checkbox v-model="remember">记住密码</el-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    let validateMobile = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      remember: window.localStorage.getItem("remember") === "true",
      form: {
        mobile: window.localStorage.getItem("mobile"),
        password: window.localStorage.getItem("password"),
        type: "password",
      },
      rules: {
        mobile: [{ validator: validateMobile, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    onClickLogin() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$store.dispatch("user/login", this.form);
          if (this.remember) {
            window.localStorage.setItem("remember", "true");
            window.localStorage.setItem("mobile", this.form.mobile);
            window.localStorage.setItem("password", this.form.password);
          } else {
            window.localStorage.removeItem("remember");
            window.localStorage.removeItem("mobile");
            window.localStorage.removeItem("password");
          }
        } else {
          console.log("xxxxxx");
          return false;
        }
      });
    },
  },
  computed: {
    token() {
      return this.$store.getters["user/getToken"];
    },
  },
  watch: {
    token(value) {
      if (value) {
        this.$router.push({ name: "Home" });
      }
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
      .btn-box {
        margin-top: 10px;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
