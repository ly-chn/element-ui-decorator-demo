<template>
  <el-button
    :disabled="disabled"
    :loading="loading"
    icon="el-icon-search"
    size="small"
    type="primary"
    @click="$emit('click')"
  >
    <slot>检索</slot>
  </el-button>
</template>

<script>
import FormButtonMixin from './mixins/form-button-mixin'

export default {
  name: 'LyBtnSearch',
  mixins: [FormButtonMixin]
}
</script>
