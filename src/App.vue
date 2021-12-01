<template>
  <el-container>
    <el-header height="40px">
      Drag UI
      <i class="iconfont icon-baocunwendang" @click="saveVNode"></i>
    </el-header>
    <el-container>
      <el-aside width="340px">
        <widgets />
        <pre>{{ data.VNodes }}</pre>
      </el-aside>
      <el-main>
        <Canvas />
      </el-main>
      <el-aside width="340px">
        <panel />
      </el-aside>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import localforage from "localforage";
import { reactive, onMounted } from "vue";
import Widgets from "./design/widgets.vue";
import Canvas from "./design/canvas.vue";
import useEventBus from "./hooks/useEventBus";
import panel from "./design/panel.vue";

const { eventBus } = useEventBus();

interface DataInterface {
  VNodes: [];
}

const data: DataInterface = reactive({
  VNodes: [],
});

const saveVNode = () => {
  localforage.setItem("UI_VNODE", JSON.stringify(data.VNodes));
};

onMounted(async () => {
  const VNodes = await localforage.getItem("UI_VNODE");
  VNodes && eventBus.emit("loadVNode", JSON.parse(VNodes));
});

eventBus.on("updateVNode", (VNode: []) => {
  data.VNodes = VNode;
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app,
.el-container,
.el-aside {
  height: 100%;
}
.el-aside {
  border-right: 1px solid #eee;
  padding: 0 10px;
}
.el-main {
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
