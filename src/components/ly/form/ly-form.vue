<template>
  <el-form
    ref="ruleForm"
    :class="{'ly-form-search': searchForm}"
    :disabled="disabled"
    :model="{}"
    :size="searchForm ? 'small' : size"
    class="ly-form"
    label-position="left"
    label-width="auto"
    @submit.native.prevent
  >
    <el-row style="margin-left: 0;margin-right: 0;">
      <slot />
      <el-col v-if="searchForm" ref="buttonArea" :span="buttonSpan" style="padding-top: 2px;text-align: right">
        <ly-btn-search v-if="showSearch" :loading="loading" @click="$emit('search')" />
        <ly-btn-reset v-if="showReset" :loading="loading" @click="$emit('reset')" />
        <slot name="append-buttons" />
      </el-col>
    </el-row>
  </el-form>
</template>

<script>

import { ColSpanMixin } from '@/components/ly/mixins/form-item-mixin'

/**
 * 表单组件
 */
export default {
  name: 'LyForm',
  mixins: [ColSpanMixin],
  props: {
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean
    },
    /**
     * 为true表示为检索页, 超出时将自动显示折叠功能, 自动调整默认显示个数等功能支持
     */
    searchForm: {
      type: Boolean
    },
    /**
     * label最大宽度: px, 涉及自动计算对齐label宽度
     */
    maxLabelWidth: {
      type: Number,
      default: 200
    },
    /**
     *  用于控制该表单内组件的尺寸
     */
    size: {
      type: String,
      default: 'medium'
    },
    /**
     * 查询按钮loading
     */
    loading: Boolean
  },
  data() {
    return {
      /**
       * null: 不显示, true: 展开, false: 折叠
       */
      expandStatus: null,
      buttonSpan: 0
    }
  },
  computed: {
    /**
     * 栅格布局占用的列数
     * @return {number}
     */
    colSpan() {
      if (this.only) {
        return 24
      }
      if (this.half) {
        return 12
      }
      if (this.oneThird) {
        return 8
      }
      if (this.quarter) {
        return 6
      }
      if (this.span) {
        return this.span
      }
      if (this.searchForm) {
        return 6
      }
      return 6
    },
    showSearch() {
      return !!this.$listeners.search
    },
    showReset() {
      return !!this.$listeners.reset
    }
  },
  updated() {
    this.resetButtonSpan()
  },
  mounted() {
    // 自动计算展开折叠功能
    this.resetButtonSpan()
  },
  methods: {
    /**
     * 移除表单项的校验结果
     */
    clearValidate() {
      this.$refs.ruleForm.clearValidate()
    },
    /**
     * 对整个表单进行校验的方法, 返回一个Promise
     */
    validate() {
      return this.$refs.ruleForm.validate()
    },
    /**
     * 检索/重置按钮的位置
     */
    resetButtonSpan() {
      this.$nextTick(() => {
        if (!this.searchForm) {
          return
        }
        let sum = 0
        for (const formItem of this.$slots.default) {
          sum += (formItem && formItem.componentInstance && formItem.componentInstance.colSpan) || 0
        }
        let buttonSpan = (24 - (sum % 24)) || 24
        this.$nextTick(() => {
          if (this.buttonSpan === 24) {
            return
          }
          if (this.$refs.buttonArea.$el.clientHeight > 40) {
            buttonSpan = 24
          }
          this.buttonSpan = buttonSpan
        })
      })
    }
  },
  provide() {
    return {
      formInstance: this
    }
  }
}
</script>

<style lang="scss" scoped>
// 行内编辑
.ly-form {
  // 下拉, 时间日期, 数字输入框的宽度与input保持一致(填满form-item)
  .el-select,
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner,
  .el-input-number {
    width: 100%
  }

  // 数字输入框的文本对齐
  .el-input-number .el-input__inner {
    text-align: left
  }

  // 嵌套form-item时, 内部form-item不显示margin-bottom, 也不进行内部参数校验
  .el-form-item__content > .ly-form-item-col > .el-form-item {
    margin-bottom: 0;
  }
}
</style>
