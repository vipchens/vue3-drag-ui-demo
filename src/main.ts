import { createApp } from "vue";
import mitt from "mitt";

import draggable from "vuedraggable";
import Antd from 'ant-design-vue';

import JsonForm from '@lljj/vue3-form-ant';

import 'ant-design-vue/dist/antd.css';
import './assets/css/font.css'

import widgetComponents from "./widgets";

import App from "./App.vue";

const app = createApp(App);

app.component('json-form', JsonForm)

const widgets = Object.keys(widgetComponents)
widgets.forEach(widget => {
  app.component(widget, widgetComponents[widget])
});
app.component('draggable', draggable)
app.use(Antd);


app.config.globalProperties.$EventBus = mitt();

app.mount("#app");
