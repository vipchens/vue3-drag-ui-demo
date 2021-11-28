<template>
  <el-form v-model="data" label-position="top">
    <el-form-item
      v-for="item in configs"
      :key="item.prop"
      :label="item.label"
      :prop="item.prop"
      :rules="item.rules"
    >
      <el-input
        v-if="item.type === 'number'"
        v-model.number="data[item.prop]"
        type="number"
      />
      <el-input v-else v-model="data[item.props]" />
    </el-form-item>

    <el-button type="primary" @click="submit">保存</el-button>
    <el-button>取消</el-button>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps(["configs", "data", "type"]);
console.log(props, 99);

const emitts = defineEmits(["submit"]);

const submit = () => {
  emitts("submit", props.type, props.data);
};
</script>

<style lang="less" scoped></style>
