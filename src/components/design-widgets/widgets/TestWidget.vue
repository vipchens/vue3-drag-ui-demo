<template>test----test</template>

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
