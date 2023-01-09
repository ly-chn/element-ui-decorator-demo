<template>
  <el-button
    :disabled="disabled"
    :loading="loading"
    icon="el-icon-upload2"
    size="small"
    type="primary"
    @click="handleClick"
  >
    <input
      ref="fileRef"
      style="display: none"
      type="file"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      @change="handleFileChange"
    >
    <slot>导入</slot>
  </el-button>
</template>

<script>
import FormButtonMixin from './mixins/form-button-mixin'

export default {
  name: 'LyBtnImport',
  mixins: [FormButtonMixin],
  methods: {
    /**
     * 文件变更
     * @param {Event} e
     */
    handleFileChange(e) {
      /**
       * @type {HTMLInputElement}
       */
      const target = e.target
      const file = target.files[target.files.length - 1]
      this.$emit('change', file)
    },
    handleClick() {
      this.$refs.fileRef.dispatchEvent(new MouseEvent('click'))
    }
  }
}
</script>
