<template>
  <div>User page</div>
</template>

<script>
export default {
  name: "User",
  mounted() {
    console.log("router params -->", this.$route.params)
  },
};
</script>

<style scoped></style>
