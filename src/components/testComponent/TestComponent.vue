<template>
  <div>
    <div v-if="!test" @click="onEmit(true)">发送Emit true {{ test }}</div>
    <div v-if="test" @click="onEmit(false)">发送Emit false {{ test }}</div>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  props: {
    test: Boolean,
  },
  methods: {
    onEmit(v) {
      this.$emit("update:test", v);
    },
  },
};
</script>

<style scoped></style>
