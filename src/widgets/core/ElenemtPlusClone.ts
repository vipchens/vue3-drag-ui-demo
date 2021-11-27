// import { ElAlert } from 'element-plus'
// import { ElAutocomplete } from 'element-plus'
// import { ElAvatar } from 'element-plus'
// import { ElBacktop } from 'element-plus'
// import { ElBadge } from 'element-plus'
// import {
//   ElBreadcrumb,
//   ElBreadcrumbItem,
// } from 'element-plus'
// import { ElButton, ElButtonGroup } from 'element-plus'
// import { ElCalendar } from 'element-plus'
// import { ElCard } from 'element-plus'
// import { ElCarousel, ElCarouselItem } from 'element-plus'
// import { ElCascader } from 'element-plus'
// import { ElCascaderPanel } from 'element-plus'
// import { ElCheckTag } from 'element-plus'
// import {
//   ElCheckbox,
//   ElCheckboxButton,
//   ElCheckboxGroup,
// } from 'element-plus'
// import { ElCol } from 'element-plus'
// import { ElCollapse, ElCollapseItem } from 'element-plus'
// import { ElCollapseTransition } from 'element-plus'
// import { ElColorPicker } from 'element-plus'
// import { ElConfigProvider } from 'element-plus'
// import {
//   ElContainer,
//   ElAside,
//   ElFooter,
//   ElHeader,
//   ElMain,
// } from 'element-plus'
// import { ElDatePicker } from 'element-plus'
// import {
//   ElDescriptions,
//   ElDescriptionsItem,
// } from 'element-plus'
// import { ElDialog } from 'element-plus'
// import { ElDivider } from 'element-plus'
// import { ElDrawer } from 'element-plus'
// import {
//   ElDropdown,
//   ElDropdownItem,
//   ElDropdownMenu,
// } from 'element-plus'
// import { ElEmpty } from 'element-plus'
// import { ElForm, ElFormItem } from 'element-plus'
// import { ElIcon } from 'element-plus'
// import { ElImage } from 'element-plus'
// import { ElImageViewer } from 'element-plus'
// import { ElInput } from 'element-plus'
// import { ElInputNumber } from 'element-plus'
// import { ElLink } from 'element-plus'
// import {
//   ElMenu,
//   ElMenuItem,
//   ElMenuItemGroup,
// } from 'element-plus'
// import { ElPageHeader } from 'element-plus'
// import { ElPagination } from 'element-plus'
// import { ElPopconfirm } from 'element-plus'
// import { ElPopover } from 'element-plus'
// import { ElPopper } from 'element-plus'
// import { ElProgress } from 'element-plus'
// import {
//   ElRadio,
//   ElRadioButton,
//   ElRadioGroup,
// } from 'element-plus'
// import { ElRate } from 'element-plus'
// import { ElResult } from 'element-plus'
// import { ElRow } from 'element-plus'
// import { ElScrollbar } from 'element-plus'
// import {
//   ElSelect,
//   ElOption,
//   ElOptionGroup,
// } from 'element-plus'
// import { ElSelectV2 } from 'element-plus'
// import { ElSkeleton, ElSkeletonItem } from 'element-plus'
// import { ElSpace } from 'element-plus'
// import { ElSteps, ElStep } from 'element-plus'
// import { ElSwitch } from 'element-plus'
// import { ElTable, ElTableColumn } from 'element-plus'
// import { ElTabs, ElTabPane } from 'element-plus'
// import { ElTag } from 'element-plus'
// import { ElTimePicker } from 'element-plus'
// import { ElTimeSelect } from 'element-plus'
// import { ElTimeline, ElTimelineItem } from 'element-plus'
// import { ElTooltip } from 'element-plus'
// import { ElTransfer } from 'element-plus'
import { ElTree } from 'element-plus'
// import { ElTreeV2 } from 'element-plus'
// import { ElUpload } from 'element-plus'

const elementPlusPackage = [
  // ElAlert,
  // ElAutocomplete,
  // ElAvatar,
  // ElBacktop,
  // ElBadge,
  // ElBreadcrumb,
  // ElBreadcrumbItem,
  // ElButton,
  // ElButtonGroup,
  // ElCalendar,
  // ElCard,
  // ElCarousel,
  // ElCarouselItem,
  // ElCascader,
  // ElCascaderPanel,
  // ElCheckTag,
  // ElCheckbox,
  // ElCheckboxButton,
  // ElCheckboxGroup,
  // ElCol,
  // ElCollapse,
  // ElCollapseItem,
  // ElCollapseTransition,
  // ElColorPicker,
  // ElConfigProvider,
  // ElContainer,
  // ElAside,
  // ElFooter,
  // ElHeader,
  // ElMain,
  // ElDatePicker,
  // ElDescriptions,
  // ElDescriptionsItem,
  // ElDialog,
  // ElDivider,
  // ElDrawer,
  // ElDropdown,
  // ElDropdownItem,
  // ElDropdownMenu,
  // ElEmpty,
  // ElForm,
  // ElFormItem,
  // ElIcon,
  // ElImage,
  // ElImageViewer,
  // ElInput,
  // ElInputNumber,
  // ElLink,
  // ElMenu,
  // ElMenuItem,
  // ElMenuItemGroup,
  // ElPageHeader,
  // ElPagination,
  // ElPopconfirm,
  // ElPopover,
  // ElPopper,
  // ElProgress,
  // ElRadio,
  // ElRadioButton,
  // ElRadioGroup,
  // ElRate,
  // ElResult,
  // ElRow,
  // ElScrollbar,
  // ElSelect,
  // ElOption,
  // ElOptionGroup,
  // ElSelectV2,
  // ElSkeleton,
  // ElSkeletonItem,
  // ElSpace,
  // ElSteps,
  // ElStep,
  // ElSwitch,
  // ElTable,
  // ElTableColumn,
  // ElTabs,
  // ElTabPane,
  // ElTag,
  // ElTimePicker,
  // ElTimeSelect,
  // ElTimeline,
  // ElTimelineItem,
  // ElTooltip,
  // ElTransfer,
  ElTree,
  // ElTreeV2,
  // ElUpload,
]

import { DefineComponent } from 'vue'
import type { SFCWithInstall } from 'element-plus/es/utils/types';
import { keyOf } from 'element-plus/es/utils/props';

function transferPackage(uiPackage: SFCWithInstall<DefineComponent>) {
  const { name: packageName, props: packageProps, emits: packageEmits } = uiPackage
  const props = {}
  Object.keys(packageProps).forEach((prop) => {
    const propConfig = packageProps[prop]
    const propType = typeof propConfig

    if (propType === 'function') {
      props[prop] = propConfig()
    } else if (propType === 'object') {
      // props[prop] =
    }

  })
  return {
    name: uiPackage, props, emits: packageEmits
  }
}

const elementUiMap = new Map()
for (let i = 0; i < elementPlusPackage.length; i++) {
  const uiPackage = elementPlusPackage[i];

  if (uiPackage) {
    const { name, props, emits } = transferPackage(uiPackage)
    elementUiMap.set(name, { name, props, emits })
  }

}
