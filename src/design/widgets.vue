<template>
  <a-card
    v-for="item in widgetConfig"
    :key="item.name"
    :title="item.title"
    :bordered="false"
    class="widget-card"
  >
    <draggable
      v-model="item.configs"
      class="widget-wrap"
      item-key="name"
      :group="{ name: 'DS', pull: 'clone', put: false }"
      :clone="addClone"
    >
      <template #item="{ element }">
        <div class="widget-item">
          <i :class="`iconfont ${element.icon}`"></i>
          <span>{{ element.title }}</span>
        </div>
      </template>
    </draggable>
  </a-card>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import { widgetConfig as configs } from "../widgets";
import { WidgetElement } from "../widgets/core/WidgetElement";
import { BaseWidget, WidgetPanelConfigItem } from "../types";

const widgetConfig = reactive(configs);

const addClone = (element: BaseWidget) => {
  console.log(element, new WidgetElement(element), "addClone");
  return new WidgetElement(element);
};
</script>

<style lang="less" scoped>
.widget-card {
  margin-bottom: 10px;
}
.widget-wrap {
  width: 100%;
  display: flex;
}
.widget-item {
  width: 100%;
  max-width: 100%;

  height: 60px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(248, 250, 252);
  color: rgb(102, 102, 102);
  border-radius: 4px;
  margin-bottom: 8px;
  margin-right: 8px;
  cursor: pointer;
  transition: all 0.2s ease-out 0s;
  position: relative;
  &:hover {
    background: rgb(229, 232, 235);
  }
  .iconfont {
    font-size: 18px;
  }
}
</style>
