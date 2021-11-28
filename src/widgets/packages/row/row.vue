<template>
  <el-row :class="choseClass" @click.stop="emitChoseElement(props.element)">
    <draggable
      class="draggable"
      item-key="name"
      v-model="props.element.children"
      group="DS"
    >
      <template #item="{ element }">
        <component :is="element.name" :element="element" />
      </template>
    </draggable>
  </el-row>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import useActiveElement from "../../../hooks/useActiveElement";

const props = defineProps(["element"]);

const { choseClass, emitChoseElement, onChoseElement } = useActiveElement();
onChoseElement(props.element);
</script>

<style lang="less" scoped>
.draggable {
  min-height: 40px;
  width: 100%;
  height: 100%;
}
</style>
