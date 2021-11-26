<template>
  {{ VNode }}
  <el-row>
    <draggable
      class="draggable-wrap"
      item-key="name"
      v-model="props.element.children"
      group="DS"
      @add="addChildren"
    >
      <template #item="{ element }">
        <component :is="element.name" :element="element" />
      </template>
    </draggable>
  </el-row>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const props = defineProps(['element'])
const VNode = reactive([])

const addChildren = (evt: any) => {
  const parentNode = evt.item._underlying_vm_
  console.log(parentNode, 'parentNode');
  // props.element.children.push(parentNode)

}

</script>

<style>
.draggable-wrap {
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  padding: 10px;
}
</style>
