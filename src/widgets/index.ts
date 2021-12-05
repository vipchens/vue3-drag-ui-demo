import RowWidget from './packages/row'

import ColWidget from './packages/col'

import FormWidget from './packages/form'
import FormItemWidget from './packages/form-item'
import InputWidget from './packages/input'

import TestWidget from './packages/test'

interface WidgetsConfigs {
  [key: string]: WidgetsConfigItem
}
interface WidgetsConfigItem {
  name: string,
  title: string,
  configs: object[]
}

export const widgetConfig: WidgetsConfigs = {
  layout: {
    name: 'layout',
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
      FormWidget,
      FormItemWidget,
      InputWidget
    ],
  }
}

const packagesComponentMap = {}
const packages = [
  RowWidget,
  ColWidget,
  FormWidget,
  FormItemWidget,
  InputWidget,
  TestWidget
]
packages.forEach(item => {
  packagesComponentMap[item.name] = item.component
})

export default packagesComponentMap
