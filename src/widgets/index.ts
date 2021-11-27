import RowWidget from './packages/row/row.vue'
import ColWidget from './packages/col/col.vue'
import TestWidget from './packages/TestWidget.vue'

interface WidgetsConfigs {
  [key: string]: WidgetsConfigItem
}
interface WidgetsConfigItem {
  title: string,
  configs: object[]
}

export const widgetConfig: WidgetsConfigs = {
  layout: {
    title: '布局组件',
    configs: [
      {
        name: 'RowWidget'
      },
      {
        name: 'ColWidget'
      },
      {
        name: 'TestWidget'
      }
    ]
  }
}

export default { RowWidget, ColWidget, TestWidget }
