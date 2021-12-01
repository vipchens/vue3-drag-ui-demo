import FormItemWidget from './form-item.vue'

const ui = {
  props: {
    label: '姓名',
    prop: 'name'
  },
  event: {}
}

const panel = [
  {
    prop: 'label',
    label: '标题',
    default: '姓名',
    type: 'input',
    rules: {}
  },
  {
    prop: 'prop',
    label: '映射属性',
    default: 'name',
    type: 'input',
    rules: {}
  },
]

export default {
  name: 'FormItemWidget',
  title: '表单子项',
  icon: 'icon-file',
  ui,
  panel,
  component: FormItemWidget
}
