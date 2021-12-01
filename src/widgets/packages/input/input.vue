<template>
  <div>
    <el-input
      v-bind="element.data.props"
      :class="choseClass"
      @click.stop="emitChoseElement(props.element)"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import useActiveElement from "../../../hooks/useActiveElement";

const props = defineProps(["element"]);
const element = props.element;

const { choseClass, emitChoseElement, onChoseElement } = useActiveElement();

onChoseElement(element);
</script>

<style lang="less" scoped>
.el-input {
  width: 100%;
}
.draggable {
  width: 100%;
  height: 100%;
  min-height: 40px;
}
</style>
