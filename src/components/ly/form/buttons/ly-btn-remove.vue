<template>
  <el-button
    class="ly-form-button"
    :loading="loading"
    :disabled="disabled"
    icon="el-icon-delete"
    type="danger"
    size="small"
    @click="handleClick"
  >
    <slot>批量删除</slot>
  </el-button>
</template>

<script>

import FormButtonMixin from './mixins/form-button-mixin'

export default {
  name: 'LyBtnRemove',
  mixins: [FormButtonMixin],
  props: {
    /**
     * 为true时, 删除操作不需要二次确认
     */
    unimportant: Boolean,
    /**
     * 提示内容示例:
     * ())=>`确认要删除${xxx}吗`
     */
    tip: {
      type: [String, Function],
      default: '确认删除选中内容吗？'
    }
  },
  methods: {
    handleClick() {
      if (this.unimportant) {
        return this.$emit('click')
      }
      let tip = this.tip
      if (typeof tip === 'function') {
        tip = tip()
      }
      this.$confirm(tip, '提示', { type: 'warning' }).then(_ => this.$emit('click'))
    }
  }
}
</script>
