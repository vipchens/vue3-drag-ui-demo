<template>
  <a-layout>
    <a-layout-header height="40px">
      DragUI
      <i class="iconfont icon-baocunwendang" @click="saveVNode"></i>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="340px">
        <widgets />
      </a-layout-sider>
      <a-layout-content>
        <Canvas />
      </a-layout-content>
      <a-layout-sider width="440px">
        <panel />
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { cloneDeep } from "lodash";
import localforage from "localforage";
import {
  readonly,
  toRaw,
  ref,
  reactive,
  onMounted,
  shallowReactive,
} from "vue";
import { useStore } from "vuex";

import Widgets from "./design/widgets.vue";
import Canvas from "./design/canvas.vue";
import useEventBus from "./hooks/useEventBus";
import panel from "./design/panel.vue";

const { eventBus } = useEventBus();
const store = useStore();
const VNodes = store.state.canvas.VNodes;

onMounted(async () => {
  const VNodes = await localforage.getItem("UI_VNODE");
  // VNodes && eventBus.emit("loadVNode", JSON.parse(VNodes));
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app,
.ant-layout,
.ant-layout-sider {
  height: 100%;
}
.ant-layout-header {
  border-bottom: 1px solid #eee;
}
.ant-layout-header,
.ant-layout-sider {
  background: #fff;
}
.ant-layout-sider {
  padding: 0 10px;
  background: #fff;
}
.ant-layout-content {
  padding: 10px;
  background-color: #eee;
}
.icon-baocunwendang {
  font-size: 20px;
  margin-left: 30px;
}
pre {
  text-align: left;
}
</style>
