import { ref } from "vue";
import useEventBus from './useEventBus';

interface ChoseElement {
  id: number,
  name: string
}

export default function () {
  let choseClass = ref('')
  const { eventBus } = useEventBus()

  // 监听元素选中事件
  const onChoseElement = (curElement: ChoseElement) => {
    // 选中元素时
    eventBus.on('choseElement', (choseElement: ChoseElement) => {
      choseClass.value = choseElement.id === curElement.id ? 'chose-element' : ''
    })
  }

  // 选中元素时
  const emitChoseElement = (choseElement: ChoseElement) => {
    eventBus.emit('choseElement', choseElement)
  }

  return {
    choseClass,
    onChoseElement,
    emitChoseElement
  }
};
