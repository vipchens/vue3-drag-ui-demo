import InputWidget from './input.vue'

export const ui = {
  props: {
    value: '',
    placeholder: '输入框占位文本'
  },
  event: {}
}

export const panel = [
  {
    prop: 'placeholder',
    label: '输入框占位文本',
    default: '请输入',
    type: 'input',
    rules: {}
  },
]

export default {
  name: 'InputWidget',
  title: '输入框',
  icon: 'icon-input',
  ui,
  panel,

  component: InputWidget
}
