/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 入荷原価を取得します */
  get: {
    query?: Types.Embed & Types.With_deleted | undefined
    status: 200
    /** OK */
    resBody: Types.PurchasePrice
  }
}
