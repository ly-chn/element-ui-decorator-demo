type LyPaging = {
  /**
   * 总数
   * @default 0
   */
  total: number,
  /**
   * 分页大小
   * @default 10
   */
  pageSize: number,
  /**
   * 当前页
   * @default 1
   */
  page: number,
  /**
   * 排序方式
   */
  isAsc?: undefined | 'asc' | 'desc',
  /**
   * 排序字段
   */
  orderByColumn?: undefined | string,
}
