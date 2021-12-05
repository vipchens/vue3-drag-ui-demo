<template>
  <div class="handle">
    <i class="iconfont icon-shanchu" @click="handleDel"></i>
    <!-- <i class="iconfont icon-shanchu"></i> -->
  </div>
</template>

<script setup lang="ts">
import { defineEmits, watch } from "vue";

const emitts = defineEmits(["del"]);
const handleDel = () => {
  emitts("del");
};
</script>

<style lang="less" scoped>
.handle {
  position: absolute;
  bottom: 0;
  font-size: 12px;
  display: inline-block;
  border-top-right-radius: 4px;
  background-color: rgb(184, 50, 247);
  color: #fff;
  padding: 0px 2px;
  .iconfont {
    font-size: 13px;
    padding: 0 2px;
  }
}
</style>
