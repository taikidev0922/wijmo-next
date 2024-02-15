/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** 入荷原価を再計算します */
  put: {
    query?: Types.Embed & Types.With_deleted | undefined
    status: 200
    /** OK */
    resBody: Types.PurchasePrice
  }
}
