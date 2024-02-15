/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 商品メモを取得します */
  get: {
    query?: Types.Embed & Types.With_deleted | undefined
    status: 200
    /** OK */
    resBody: Types.InventMemo
  }
}
