<template>
  <div class="canvas">
    {{ data.VNodes }}
    <draggable :list="data.VNodes" class="list-group" group="DS" item-key="name">
      <template #item="{ element }">
        <component :is="element.name" :element="element" />
      </template>
    </draggable>
  </div>
</template>

 <script setup lang="ts">
import { reactive, watch } from 'vue';
import useEventBus from '../../hooks/useEventBus';
const { eventBus } = useEventBus()

interface DataInterface {
  VNodes: []
}

const data: DataInterface = reactive({
  VNodes: []
})

watch(data.VNodes, () => {
  console.log(data.VNodes, 88);

  eventBus.emit('updateVNode', data.VNodes)
})


</script>

<style lang="less">
.canvas {
  background-color: #fff;
  padding: 10px;
}
</style>
