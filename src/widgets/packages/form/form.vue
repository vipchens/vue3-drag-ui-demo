<template>
  <json-form
    v-bind="props.element.data.props"
    v-model="data.formData"
    :schema="data.schema"
    :class="choseClass"
    @click.stop="emitChoseElement(props.element)"
  >
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
  </json-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import useActiveElement from "../../../hooks/useActiveElement";

const props = defineProps(["element"]);
const element = props.element;

const data = reactive({
  VNodes: [],
  formData: {},
  schema: {
    type: "object",
    required: ["userName", "age", "bio"],
    properties: {
      userName: {
        type: "string",
        title: "用户名",
        default: "Liu.Jun",
      },
      age: {
        type: "number",
        title: "年龄",
      },
      bio: {
        type: "string",
        title: "签名",
        minLength: 10,
        default: "知道的越多、就知道的越少",
        "ui:options": {
          placeholder: "请输入你的签名",
          type: "textarea",
          rows: 1,
        },
      },
    },
  },
});

const { choseClass, emitChoseElement, onChoseElement } = useActiveElement();

onChoseElement(element);
</script>

<style lang="less" scoped>
.el-col {
  width: 100%;
}
.draggable {
  width: 100%;
  height: 100%;
  min-height: 40px;
}
</style>
