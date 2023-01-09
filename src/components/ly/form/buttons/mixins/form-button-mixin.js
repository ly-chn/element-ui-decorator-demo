const FormButtonMixin = {
  props: {
    /**
     * 禁用状态
     */
    disabled: {
      type: [Boolean, Object, String, Number]
    },
    /**
     * 加载状态
     */
    loading: {
      type: Boolean
    }
  }
}

export default FormButtonMixin
