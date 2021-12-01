import { createApp } from "vue";
import mitt from "mitt";

import draggable from "vuedraggable";
import ElementPlus from 'element-plus'
import ElementPlusIcons from '@element-plus/icons'
import 'element-plus/dist/index.css'

import './assets/css/font.css'

import widgetComponents from "./widgets";

import App from "./App.vue";

const app = createApp(App);

const widgets = Object.keys(widgetComponents)
widgets.forEach(widget => {
  app.component(widget, widgetComponents[widget])
});
app.component('draggable', draggable)
app.use(ElementPlus, {
  size: 'mini'
})


app.config.globalProperties.$EventBus = mitt();

app.mount("#app");
