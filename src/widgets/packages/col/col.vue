<template>
  <a-col
    v-bind="props.element.uiAttrs"
    :class="choseClass"
    @click.stop="emitChoseElement(props.element)"
  >
    <handler-dom v-if="choseClass" @del="delElement"></handler-dom>

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
  </a-col>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import useActiveElement from "../../../hooks/useActiveElement";

const props = defineProps(["element"]);
const element = props.element;

const delElement = () => {
  props.element.delete();
};

const { HandlerDom, choseClass, emitChoseElement, onChoseElement } =
  useActiveElement();

onChoseElement(element);
</script>

<style lang="less" scoped>
.a-col {
  width: 100%;
}
.draggable {
  width: 100%;
  height: 100%;
  min-height: 40px;
}
</style>
