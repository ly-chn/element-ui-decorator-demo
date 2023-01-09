<template>
  <el-button
    icon="el-icon-refresh-left"
    size="small"
    type="default"
    @click="$emit('click')"
  >
    <slot>重置</slot>
  </el-button>
</template>

<script>
import { FormButtonMixin } from './mixins/form-button-mixin'

export default {
  name: 'LyBtnReset',
  mixins: [FormButtonMixin]
}
</script>
