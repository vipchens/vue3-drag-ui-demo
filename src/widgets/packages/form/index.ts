import FormWidget from './form.vue'

export const ui = {
  props: {
  },
  event: {}
}

export const panel = [
  {
    prop: 'span',
    label: '栅格占据的列数',
    default: 4,
    type: 'number',
    rules: {}
  },
]

export default {
  name: 'FormWidget',
  title: '表单',
  icon: 'icon-biaodan',
  ui,
  panel,

  component: FormWidget
}
