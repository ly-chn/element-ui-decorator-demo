import { LyDictUtil } from '@/components/ly/util/ly-dict-util'

export const ColSpanMixin = {
  props: {
    /**
     * all of 24
     */
    only: Boolean,
    /**
     * 12 of 24
     */
    half: Boolean,
    /**
     * 8 of 24
     */
    oneThird: Boolean,
    /**
     * 6 of 24
     */
    quarter: Boolean,
    /**
     * custom 1-24
     */
    span: Number
  }
}

export const ModelMixin = {
  props: {
    /**
     * v-model
     */
    value: null
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    modelValue: {
      get: () => this.value,
      set: v => this.$emit('change', v)
    }
  }
}

export const FormItemMixin = {
  props: {
    /**
     * 标签文本
     */
    label: String,
    /**
     * 表单验证规则
     */
    rules: [Array, Function, Object],
    /**
     * 为true时，表单不可编辑
     */
    disabled: Boolean,
    /**
     * 占位符
     */
    placeholder: String
  },
  mixins: [ColSpanMixin, ModelMixin],
  provide() {
    return {
      formItemInstance: this
    }
  },
  inject: {
    formInstance: {
      default: {}
    }
  },
  computed: {
    /**
     * 列宽
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
      if (this.formInstance.colSpan) {
        return this.formInstance.colSpan
      }
      return 6
    }
  }
}

export const DictOptionsMixin = {
  data() {
    return {
      /**
       * @type {LyDictItem[]}
       */
      finalOptions: []
    }
  },
  props: {
    /**
     * 可选项, 如果不提供的话将通过字典项获取
     */
    options: {
      type: Array
    },
    /**
     * 字典编码, 通过它取系统字典/动态字典
     */
    dictCode: {
      type: String
    },
    // 为true时, v-model的参数将变为string类型, 比如多选['1', '2', '3']届时将变为'1,2,3'
    asText: Boolean
  },
  methods: {
    async calcDictOptions() {
      if (this.options) {
        this.finalOptions = this.options
        return
      }
      this.finalOptions = await LyDictUtil.getDictItemList(this.dictCode)
    }
  },
  watch: {
    options: {
      immediate: true,
      handler(v) {
        this.calcDictOptions()
      }
    },
    dictCode: {
      immediate: true,
      handler(v) {
        this.calcDictOptions()
      }
    }
  }
}
