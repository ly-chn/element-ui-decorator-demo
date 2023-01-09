<template>
  <el-button
    class="ly-form-button"
    :loading="loading"
    :disabled="disabled"
    icon="el-icon-plus"
    type="primary"
    size="small"
    @click="$emit('click')"
  >
    <slot>添加</slot>
  </el-button>
</template>

<script>

import { FormButtonMixin } from './mixins/form-button-mixin'

export default {
  name: 'LyBtnCreate',
  mixins: [FormButtonMixin]
}
</script>
