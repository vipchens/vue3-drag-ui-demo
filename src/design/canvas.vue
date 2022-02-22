<template>
  <div class="canvas">
    <draggable :list="VNodes" class="ds-draggable" group="DS" item-key="name">
      <template #item="{ element }">
        <component :is="element.name" :element="element" />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { useStore } from "vuex";
import useEventBus from "../hooks/useEventBus";

const { eventBus } = useEventBus();

const store = useStore();
const VNodes = store.state.canvas.VNodes;
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
  border: 1px solid rgb(184, 50, 247) !important;
  background-color: rgba(184, 50, 247, 0.3);
}

// 选中元素时
.chose-element {
  position: relative;
  border: 1px solid rgb(184, 50, 247) !important;
}
</style>
