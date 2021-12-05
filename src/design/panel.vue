<template>
  <a-tabs v-model:activeKey="activeTab">
    <a-tab-pane tab="基本属性" key="base">
      <common-form
        v-if="curChoseElement"
        type="uiAttrs"
        :schema="curChoseElement.panel"
        :data="data"
        @submit="saveForm"
      />
    </a-tab-pane>
    <a-tab-pane tab="事件管理" key="events"></a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { cloneDeep } from "lodash";
import { ref, reactive, Ref } from "vue";

import CommonForm from "../components/form.vue";
import useEventBus from "../hooks/useEventBus";
import { WidgetElement } from "../types";
const { eventBus } = useEventBus();

let curChoseElement: Ref<WidgetElement | null> = ref(null);
let data = ref({
  uiAttrs: {},
  uiEvents: {},
});

const activeTab = ref("base");

const saveForm = (type: string, result: object) => {
  console.log(type, result, "result");

  console.log(curChoseElement.value, "curChoseElement.value");

  if (curChoseElement.value) {
    curChoseElement.value[type] = cloneDeep(result[type]);
  }
};
// 选中元素时
eventBus.on("choseElement", (choseElement: WidgetElement) => {
  // const elementData = cloneDeep(choseElement);
  data.value.uiAttrs = cloneDeep(choseElement.uiAttrs);
  data.value.uiEvents = cloneDeep(choseElement.uiEvents);
  curChoseElement.value = choseElement;
});
</script>
