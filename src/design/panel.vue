<template>
  <a-tabs v-model:activeKey="activeTab">
    <a-tab-pane tab="基本属性" key="base">
      <common-form
        v-if="curChoseElement"
        type="attrs"
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
let data = reactive({});

const activeTab = ref("base");

const saveForm = (type: string, result: object) => {
  console.log(type, result, "result");

  console.log(curChoseElement.value, "curChoseElement.value");

  if (curChoseElement.value) {
    curChoseElement.value.data[type] = cloneDeep(result[type]);
  }
};
// 选中元素时
eventBus.on("choseElement", (choseElement: WidgetElement) => {
  const elementData = cloneDeep(choseElement.data);
  for (const key in elementData) {
    data[key] = elementData[key];
  }
  curChoseElement.value = choseElement;
});
</script>
