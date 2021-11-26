import { reactive, getCurrentInstance } from "vue";

export default function () {
  const ctx = getCurrentInstance()

  console.log(ctx);

  const data = reactive({
    dd: {}
  })

  return {
    eventBus: ctx?.appContext.app.config.globalProperties.$EventBus
  }
};
