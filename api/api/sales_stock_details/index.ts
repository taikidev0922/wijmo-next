/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 取置明細一覧を返します。 */
  get: {
    query: Types.Embed & {
      /** 商品ID */
      invent_id: number
      /** 集計区分が集計であるかどうか。trueなら集計、falseなら個別。 */
      is_total: boolean
      /** 得意先ID */
      customer_id?: number | undefined
      /** 得意先グループCD */
      customer_group_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.SalesStockDetail[]
      total: number
    }
  }
}
