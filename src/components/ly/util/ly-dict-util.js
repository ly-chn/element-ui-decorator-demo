
export class LyDictUtil {
  /**
   * 通过字典编码读取字典,可以扩展以支持本地字典/全局字典/动态字典等
   * @param dictCode
   * @return {Promise<LyDictItem[]>}
   */
  static async getDictItemList(dictCode) {
    if (dictCode === 'sex') {
      return [
        { label: '男', value: 'man', desc: '男性', type: 'info' },
        { label: '女', value: 'woman', desc: '女性', type: '' },
        { label: '保密', value: 'secret', desc: '不便告知的性别', type: '' }
      ]
    } else if (dictCode === 'hobby') {
      const list = '打篮球、瑜伽、滑旱冰、唱歌、钓鱼、跑步、弹吉他、拼图、下棋、弹钢琴'.split('、')
      const result = []
      for (const hobby of list) {
        result.push({ label: hobby, value: hobby, desc: `爱好-${hobby}`, type: '' })
      }
      return result
    }
    return [
      { label: '字典项1', value: 'item1', desc: '测试字典1的说明', type: 'info' },
      { label: '字典项2', value: 'item2', desc: '测试字典2的说明', type: 'warning' },
      { label: '字典项3', value: 'item3', desc: '测试字典3的说明', type: 'danger' },
      { label: '字典项4', value: 'item4', desc: '测试字典4的说明', type: '' },
      { label: '字典项5', value: 'item5', desc: '测试字典5的说明', type: 'warning' },
      { label: '字典项6', value: 'item6', desc: '测试字典6的说明', type: 'danger' }
    ]
  }

  /**
   * 转为数组
   * @param {string|string[]} val 目标值
   * @return {string[]} 转换后的数组
   */
  static castArray(val) {
    if (!val) {
      return []
    }
    if (Array.isArray(val)) {
      return val
    }
    return val?.split(',') ?? []
  }
}
