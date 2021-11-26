import { createApp } from "vue";
import mitt from "mitt";

import draggable from "vuedraggable";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import widgetComponents from "./components/design-widgets";

import App from "./App.vue";

const app = createApp(App);

const widgets = Object.keys(widgetComponents)
widgets.forEach(widget => {
  app.component(widget, widgetComponents[widget])
});
app.component('draggable', draggable)
app.use(ElementPlus)


app.config.globalProperties.$EventBus = mitt();

app.mount("#app");
