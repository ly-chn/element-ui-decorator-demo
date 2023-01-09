type RuleFunction = (message?: string) => any

interface LyRule {
  /**
   * 不能为空
   */
  must: RuleFunction,
  length: (min: number, max: number, message?: string) => any
}

declare module 'vue/types/vue' {
  interface Vue {
    // 占位函数
    $todo: (...args) => void,
    $rules: LyRule
  }
}

export interface Vue {
  $todo: (...args: any) => void,
  $rules: LyRule
}
