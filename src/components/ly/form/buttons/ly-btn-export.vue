<template>
  <el-button
    :disabled="disabled"
    :loading="loading"
    icon="el-icon-download"
    size="small"
    type="primary"
    @click="$emit('click')"
  >
    <slot>导出</slot>
  </el-button>
</template>

<script>
import { FormButtonMixin } from './mixins/form-button-mixin'

export default {
  name: 'LyBtnExport',
  mixins: [FormButtonMixin]
}
</script>
