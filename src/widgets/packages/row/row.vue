<template>
  <div
    class="row"
    :class="choseClass"
    @click.stop="emitChoseElement(props.element)"
  >
    <handler-dom v-if="choseClass" @del="delElement"></handler-dom>
    <draggable
      v-model="props.element.children"
      class="draggable-row"
      :class="rowClass"
      item-key="name"
      group="DS"
    >
      <template #item="{ element }">
        <component :is="element.name" :element="element" />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import useActiveElement from "../../../hooks/useActiveElement";

let rowClass = ref({
  "ant-row": true,
});

const props = defineProps(["element"]);

console.log(props, "propspropss");

watch(
  () => props.element.uiAttrs,
  (uiAttrs) => {
    console.log(uiAttrs, "uiAttrs1");

    rowClass.value = {
      "ant-row": true,
    };
    if (uiAttrs.align) {
      rowClass.value[`ant-row-${uiAttrs.align}`] = true;
    }
    if (uiAttrs.justify) {
      rowClass.value[`ant-row-${uiAttrs.justify}`] = true;
    }
    if (!uiAttrs.wrap) {
      rowClass.value["ant-row-no-wrap"] = true;
    }
  },
  { deep: true }
);

const delElement = () => {
  props.element.delete();
};

const { HandlerDom, choseClass, emitChoseElement, onChoseElement } =
  useActiveElement();
onChoseElement(props.element);
</script>

<style lang="less" scoped>
.draggable-row {
  min-height: 40px;
  width: 100%;
}
.row {
  border: 1px dashed #eee;
}
</style>
