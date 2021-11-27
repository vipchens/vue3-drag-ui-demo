import { reactive, getCurrentInstance } from "vue";

export default function () {
  const ctx = getCurrentInstance()

  return {
    eventBus: ctx?.appContext.app.config.globalProperties.$EventBus
  }
};
