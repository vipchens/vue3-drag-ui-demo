import FormWidget from './form.vue'

export const ui = {
  props: {
  },
  event: {}
}

export const editschema = {
  "schema": {
    "type": "object",
    "required": [],
    "properties": {
      "object_1638548218933x0": {
        "title": "Object",
        "type": "object",
        "required": [],
        "properties": {
          "span": {
            "title": "栅格占位格数",
            "type": "number",
            "description": "为 0 时相当于 display: none",
            "default": 6,
            "multipleOf": 1
          },
          "offset": {
            "title": "栅格左侧的间隔格数",
            "type": "number",
            "description": "间隔内不可以有栅格",
            "default": 0,
            "multipleOf": 1
          },
          "order": {
            "title": "栅格顺序",
            "type": "number",
            "description": "flex 布局模式下有效",
            "default": 0,
            "multipleOf": 1
          },
          "pull": {
            "title": "栅格向左移动格数",
            "type": "number",
            "description": "栅格向左移动格数",
            "default": 0,
            "multipleOf": 1
          },
          "push": {
            "title": "栅格向右移动格数",
            "type": "number",
            "description": "栅格向右移动格数",
            "default": 0,
            "multipleOf": 1
          }
        },
        "ui:order": [
          "span",
          "offset",
          "order",
          "pull",
          "push"
        ]
      }
    },
    "ui:order": [
      "object_1638548218933x0"
    ]
  },
  "uiSchema": {},
  "formFooter": {
    "show": false
  },
  "formProps": {
    "inline": true,
    "labelWidth": "100px",
    "labelSuffix": "："
  }
}

export default {
  name: 'FormWidget',
  title: '表单',
  icon: 'icon-biaodan',
  ui,
  panel: editschema,

  component: FormWidget
}
