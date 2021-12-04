<template>
  <json-form
    v-model="data"
    v-bind="schema"
    label-position="top"
    @submit="submit"
  >
  </json-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps(["schema", "data", "type"]);
console.log(props, 99);

const emitts = defineEmits(["submit"]);

const submit = () => {
  emitts("submit", props.type, props.data);
};
</script>

<style lang="less">
.ant-input-number {
  width: 100%;
}
</style>
