<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item v-for="item in widgetConfig" :title="item.title" name="1">
      <draggable
        class="list-group"
        item-key="name"
        v-model="item.configs"
        :group="{ name: 'DS', pull: 'clone', put: false }"
        :clone="addClone"
      >
        <template #item="{ element }">
          <div>{{ element.name }}</div>
        </template>
      </draggable>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import { widgetConfig as configs } from '../widgets'
import { WidgetElement } from '../widgets/core/WidgetClone'

const activeNames = reactive(['1'])
const widgetConfig = reactive(configs)

const addClone = (element: { name: any }) => {
  return new WidgetElement(element)
}
</script>
