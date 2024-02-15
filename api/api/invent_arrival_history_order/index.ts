/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 商品入荷履歴取得一覧を返します */
  get: {
    query?: Types.Embed & Types.With_deleted & {
      /** 品番 */
      idm?: string | undefined
      /** 別年号含 */
      is_another?: boolean | undefined
      /** 過去五年 */
      is_five_year?: boolean | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      /** 入荷履歴一覧 */
      items: Types.ArrivalHistoryList[]
    }
  }
}
