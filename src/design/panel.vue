<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="基本属性" name="base">
      <common-form
        v-if="curChoseElement"
        type="props"
        :configs="curChoseElement.panel"
        :data="data.props"
        @submit="saveForm"
      />
    </el-tab-pane>
    <el-tab-pane label="事件管理" name="events"></el-tab-pane>
  </el-tabs>
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
    curChoseElement.value.data[type] = result;
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
