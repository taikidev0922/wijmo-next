/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 合計請求書グループを取得します */
  get: {
    query?: Types.Embed | undefined
    status: 200
    /** OK */
    resBody: Types.BillTotalGroup
  }
}
