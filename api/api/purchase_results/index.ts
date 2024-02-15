/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 在庫・仕入計上実績一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 船積オーダーNo */
      shipping_order_display_no?: string | undefined
      /** 国内発注No */
      domestic_order_no?: string | undefined
      /** 発注日From */
      ordered_on_from?: string | undefined
      /** 発注日To */
      ordered_on_to?: string | undefined
      /** 取引区分 */
      stock_trade_type_cd1?: string | undefined
      /** 商品IDM */
      invent_idm?: string | undefined
      /** 商品名 */
      invent_name?: string | undefined
      /** 仕入先IDM */
      order_vendor_idm?: string | undefined
      /** 仕入先名 */
      order_vendor_name_abbr?: string | undefined
      /** 支払先IDM */
      pay_vendor_idm?: string | undefined
      /** 支払先名 */
      pay_vendor_name_abbr?: string | undefined
      /** 支払条件IDM */
      payment_condition_idm?: string | undefined
      /** 支払条件名 */
      payment_condition_name?: string | undefined
      /** 予定倉庫IDM */
      will_location_idm?: string | undefined
      /** 予定倉庫名 */
      will_location_name?: string | undefined
      /** 入荷予定日From */
      will_record_from?: string | undefined
      /** 入荷予定日To */
      will_record_to?: string | undefined
      /** 計上倉庫IDM */
      location_idm?: string | undefined
      /** 計上倉庫名 */
      location_name?: string | undefined
      /** 仕入計上日From */
      record_from?: string | undefined
      /** 仕入計上日To */
      record_to?: string | undefined
      /** 計上担当者IDM */
      record_user_idm?: string | undefined
      /** 計上担当者名 */
      record_user_name?: string | undefined
      /** BY IDM */
      buyer_user_idm?: string | undefined
      /** BY 名 */
      buyer_user_name?: string | undefined
      /** 在庫管理対象のみ */
      is_stock?: boolean | undefined
      /** 差異バラ合計あり */
      is_with_diff_total_count?: boolean | undefined
      /** 未払のみ */
      is_unpaid?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: (Types.PurchaseResult)[]
      total: number
    }
  }

  /** 在庫・仕入計上予定を更新します。更新のみ可能です。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.PurchaseResultBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.PurchaseResultBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
