<template>
  <div
    class="row"
    :class="choseClass"
    @click.stop="emitChoseElement(props.element)"
  >
    <draggable
      class="draggable-row"
      :class="rowClass"
      item-key="name"
      v-model="props.element.children"
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

watch(
  () => props.element.data.attrs,
  (attrs) => {
    rowClass.value = {
      "ant-row": true,
    };
    if (attrs.align) {
      rowClass.value[`ant-row-${attrs.align}`] = true;
    }
    if (attrs.justify) {
      rowClass.value[`ant-row-${attrs.justify}`] = true;
    }
    if (!attrs.wrap) {
      rowClass.value["ant-row-no-wrap"] = true;
    }
  },
  { deep: true }
);

const { choseClass, emitChoseElement, onChoseElement } = useActiveElement();
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
