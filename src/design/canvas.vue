<template>
  <div class="canvas">
    <draggable
      :list="data.VNodes"
      class="ds-draggable"
      group="DS"
      item-key="name"
    >
      <template #item="{ element }">
        <component :is="element.name" :element="element" />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import useEventBus from "../hooks/useEventBus";

const { eventBus } = useEventBus();

interface DataInterface {
  VNodes: [];
}

const data: DataInterface = reactive({
  VNodes: [],
});

watch(data.VNodes, () => {
  eventBus.emit("updateVNode", data.VNodes);
});
</script>

<style lang="less">
.canvas {
  background-color: #fff;
  padding: 10px;
  height: 100%;
  // height: 100%;
}
.ds-draggable {
  height: 100%;
}
// 正常情况
.draggable {
  border: 1px dashed #eee;
}

// 拖动时
.sortable-chosen {
  border: 1px dashed rgb(184, 50, 247) !important;
}

// 选中元素时
.chose-element {
  border: 1px dashed rgb(184, 50, 247) !important;
}
</style>
