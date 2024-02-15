/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 取置明細候補の一覧を返します。最大でも1件のみ取得されます。 */
  get: {
    query: Types.Embed & {
      /** 担当者ID */
      user_id: number
      /** 入力得意先ID */
      customer_id: number
      /** 倉庫ID */
      location_id: number
      /** 商品ID */
      invent_id: number
      /** 総バラ数 */
      total_count: number
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.SalesStockDetail[]
      total: number
    }
  }
}
