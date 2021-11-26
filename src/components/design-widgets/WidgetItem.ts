let _id = 0
export class WidgetItem {
  id: number
  name: any
  children: object[]
  constructor(option: { name: any }) {
    this.id = _id++
    this.name = option.name
    this.children = []
  }
}
