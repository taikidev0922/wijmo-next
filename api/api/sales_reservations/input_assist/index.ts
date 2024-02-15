/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 入力補助用予約受注一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 予約受注No */
      no?: string | undefined
      /** 船積オーダーNo */
      shipping_order_no?: string | undefined
      /** 国内発注No */
      domestic_order_no?: string | undefined
      /** 取引区分 */
      sales_transaction_type_cd1?: string | undefined
      /** 予約受注日From */
      reservation_from?: string | undefined
      /** 予約受注日To */
      reservation_to?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 商品名(正式/和文) */
      name_jp?: string | undefined
      /** 倉庫IDM */
      location_idm?: string | undefined
      /** 倉庫名 */
      location_name?: string | undefined
      /** 得意先IDM */
      parent_idm?: string | undefined
      /** 得意先名(正式) */
      parent_name_jp?: string | undefined
      /** 入力担当者IDM */
      operator_user_idm?: string | undefined
      /** 入力担当者名 */
      operator_user_name?: string | undefined
      /** 代配店IDM */
      child_idm?: string | undefined
      /** 代配店名(正式) */
      child_name_jp?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.SalesReservation[]
      total: number
    }
  }
}
