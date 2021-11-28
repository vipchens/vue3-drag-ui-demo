import RowWidget from './packages/row/row.vue'
import RowWidgetConfig from './packages/row/config'

import ColWidget from './packages/col/col.vue'
import ColWidgetConfig from './packages/col/config'

import FormWidget from './packages/form/form.vue'
import TestWidget from './packages/TestWidget.vue'

interface WidgetsConfigs {
  [key: string]: WidgetsConfigItem
}
interface WidgetsConfigItem {
  title: string,
  configs: object[]
}
console.log(ColWidgetConfig, 'ColWidgetConfig');


export const widgetConfig: WidgetsConfigs = {
  layout: {
    title: '布局组件',
    configs: [
      {
        name: 'RowWidget',
        ...RowWidgetConfig
      },
      {
        name: 'ColWidget',
        ...ColWidgetConfig
      },
      {
        name: 'TestWidget'
      }
    ],
  },
  form: {
    title: '表单',
    configs: [
      {
        name: 'FormWidget'
      },
    ],
  }
}

export default { RowWidget, ColWidget, FormWidget, TestWidget }
