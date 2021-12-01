<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item v-for="item in widgetConfig" :title="item.title" name="1">
      <draggable
        v-model="item.configs"
        item-key="name"
        class="widget-wrap"
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
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import { widgetConfig as configs } from "../widgets";
import { WidgetElement } from "../widgets/core/WidgetElement";
import { BaseWidget, WidgetUI, WidgetPanelConfigItem } from "../types";

const activeNames = reactive(["1"]);
const widgetConfig = reactive(configs);

const addClone = (element: BaseWidget) => {
  return new WidgetElement(element);
};
</script>

<style lang="less" scoped>
.widget-wrap {
  display: flex;
}
.widget-item {
  width: 70px;
  height: 70px;
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
    font-size: 20px;
  }
}
</style>
