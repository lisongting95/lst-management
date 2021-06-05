import model from "@/api/model";
import { onMounted, watch, computed, ref } from "vue";

export default function useLogin(user) {
  const token = ref({});
  const getLoginToken = async () => {
    token.value = await model.login({
      mobile: "18669010827",
      password: "123456",
      type: "password",
    });
  };
  onMounted(getLoginToken);

  // 在用户 prop 的响应式引用上设置一个侦听器, 这里prop里没有user, 会有个warning
  watch(user, getLoginToken);

  //计算属性
  const computedTest = computed(() => {
    return token.value.access_token;
  });
  return {
    token,
    computedTest,
    getLoginToken,
  };
}
