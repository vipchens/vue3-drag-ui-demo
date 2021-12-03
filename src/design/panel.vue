<template>
  <a-tabs v-model:activeKey="activeTab">
    <a-tab-pane tab="基本属性" key="base">
      <common-form
        v-if="curChoseElement"
        type="props"
        :schema="curChoseElement.panel"
        :data="data.props"
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
const data = reactive({
  props: {},
  events: {},
});

const activeTab = ref("base");

const saveForm = (type: string, result: object) => {
  console.log(type, result, "result");

  console.log(curChoseElement.value, "curChoseElement.value");

  if (curChoseElement.value) {
    curChoseElement.value.data[type] = cloneDeep(result);
  }
};
// 选中元素时
eventBus.on("choseElement", (choseElement: WidgetElement) => {
  const { props, events } = cloneDeep(choseElement.data);
  data.props = props;
  data.events = events;
  curChoseElement.value = choseElement;
});
</script>
