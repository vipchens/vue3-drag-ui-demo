import RowWidget from './widgets/RowWidget.vue'
import TestWidget from './widgets/TestWidget.vue'

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
        name: 'TestWidget'
      }
    ]
  }
}

export default { RowWidget, TestWidget }
