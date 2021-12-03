import RowWidget from './row.vue'

export const ui = {
  props: {
    span: 4,
    offset: 0,
    push: 0,
    pull: 0,
  },
  event: {}
}

export const panel = [
]


export default {
  name: 'RowWidget',
  title: 'Row',
  icon: 'icon-column-vertical',
  ui,
  panel,
  component: RowWidget
}
