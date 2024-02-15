/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 在庫受払一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 倉庫IDM */
      location_idm?: string | undefined
      /** 受払区分 */
      transaction_type_cd1?: string | undefined
      /** 受払日From */
      stock_transaction_from?: string | undefined
      /** 受払日To */
      stock_transaction_to?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 商品名(伝票印字品名) */
      name_denpatu?: string | undefined
      /** 年号 */
      vintage?: string | undefined
      /** 容量 */
      volume?: number | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: (Types.StockTransaction & {
        /** システムID */
        creator_id?: number | null | undefined
        /** 伝票No */
        creator_no?: string | null | undefined
        /** 得意先ID */
        parent_idm?: string | null | undefined
        /** 得意先名 */
        parent_name_jp?: string | null | undefined
        /** 担当者ID */
        operator_user_idm?: string | null | undefined
        /** 担当者名 */
        operator_user_name?: string | null | undefined
      })[]
      total: number
    }
  }
}
