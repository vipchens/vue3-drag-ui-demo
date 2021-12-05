import ColWidget from './col.vue'

const uiAttrs = {
  span: 12,
  offset: 0,
  order: 0,
  pull: 0,
  push: 0
}

const uiEvents = {}

export const editschema = {
  "schema": {
    "type": "object",
    "required": [],
    "properties": {
      "uiAttrs": {
        "title": "基础参数",
        "type": "object",
        "required": [],
        "properties": {
          "span": {
            "title": "栅格占位格数",
            "type": "number",
            "description": "为 0 时相当于 display: none",
            "default": 12,
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
      "uiAttrs"
    ]
  },
  "uiSchema": {},
  "formFooter": {
    "show": true
  },
  "formProps": {
    "layoutColumn": 2,
    "labelWidth": "100px",
    "labelSuffix": "："
  }
}

export default {
  name: 'ColWidget',
  title: 'Col',
  icon: 'icon-3column',
  uiAttrs,
  uiEvents,
  panel: editschema,
  component: ColWidget
}
