<template>
  <div class="about">
    <h1>{{ stateText }}</h1>
    <router-view/>
  </div>
</template>
<script>
// import model from "@/api/model";
import { onMounted } from 'vue'
export default {
  setup(){
    onMounted(() => {
      console.log('mounted!')
    });
  },
  // async mounted() {
  //   let res = await this.$model.login({
  //     mobile: "18669010827",
  //     password: "123456",
  //     type: "password",
  //   });
  //   console.log("login res --->", res);
  //   this.token = res;
  //   console.log("token --->", this.token);
  // },
  data() {
    return {
      token: null,
    };
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
