import RowWidget from './packages/row'

import ColWidget from './packages/col'

import FormWidget from './packages/form'
import TestWidget from './packages/test'

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
      RowWidget,
      ColWidget,
      TestWidget
    ],
  },
  form: {
    title: '表单',
    configs: [
      FormWidget
    ],
  }
}

const packagesComponentMap = {}
const packages = [
  RowWidget,
  ColWidget,
  FormWidget,

  TestWidget
]
packages.forEach(item => {
  packagesComponentMap[item.name] = item.component
})

export default packagesComponentMap
