<template>
  <el-container>
    <el-header height="40px">Header</el-header>
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
import { reactive } from "vue";
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

setTimeout(() => {
  eventBus.emit("uu", "99");
}, 2000);
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
}
.el-main {
  padding: 10px;
  background-color: #eee;
}
pre {
  text-align: left;
}
</style>
