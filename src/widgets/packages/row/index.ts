import RowWidget from './row.vue'

export const ui = {
  attrs: {
    align: 'middle',
    justify: 'start',
    wrap: true,
    gutter: 16,
  },
  events: {}
}

export const editSchema = {
  "schema": {
    "type": "object",
    "required": [],
    "properties": {
      "attrs": {
        "title": "基础参数",
        "type": "object",
        "required": [
          "wrap"
        ],
        "properties": {
          "align": {
            "title": "垂直对齐方式",
            "type": "string",
            "ui:widget": "SelectWidget",
            "description": "flex 布局下的垂直对齐方式：top middle bottom",
            "default": "middle",
            "enum": [
              "top",
              "middle",
              "bottom"
            ],
            "enumNames": [
              "top",
              "middle",
              "bottom"
            ]
          },
          "justify": {
            "title": "水平排列方式",
            "type": "string",
            "ui:widget": "SelectWidget",
            "description": "flex 布局下的水平排列方式：start end center space-around space-between",
            "default": "start",
            "enum": [
              "start",
              "end",
              "center",
              "space-around",
              "space-between"
            ],
            "enumNames": [
              "start",
              "end",
              "center",
              "space-around",
              "space-between"
            ]
          },
          "wrap": {
            "title": "是否自动换行",
            "type": "boolean",
            "ui:widget": "RadioWidget",
            "default": "true",
            "enumNames": [
              "是",
              "否"
            ]
          },
          "gutter": {
            "title": "栅格间隔",
            "type": "number",
            "description": "可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]（1.5.0 后支持）。",
            "default": 16,
            "ui:options": {
              "placeholder": "请输入"
            }
          }
        },
        "ui:order": [
          "align",
          "justify",
          "wrap",
          "gutter"
        ]
      }
    },
    "ui:order": [
      "attrs"
    ]
  },
  "uiSchema": {},
  "formFooter": {},
  "formProps": {
    "labelWidth": "100px",
    "labelSuffix": "："
  }
}


export default {
  name: 'RowWidget',
  title: 'Row',
  icon: 'icon-column-vertical',
  ui,
  panel: editSchema,
  component: RowWidget
}
