/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 国内発注一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 倉庫IDM */
      location_idm?: string | undefined
      /** 倉庫名 */
      location_name?: string | undefined
      /** 品番IDM */
      invent_idm?: string | undefined
      /** 商品名 */
      invent_name?: string | undefined
      /** 年号 */
      vintage?: string | undefined
      /** 入数 */
      quantity_per_case?: number | undefined
      /** 年号違いを含む */
      includes_invent_name_yearly?: boolean | undefined
      /** 国内発注No */
      domestic_order_no?: string | undefined
      /** 国内発注NoFrom */
      domestic_order_no_from?: string | undefined
      /** 国内発注NoTo */
      domestic_order_no_to?: string | undefined
      /** 予定納期From */
      scheduled_delivery_on_from?: string | undefined
      /** 予定納期To */
      scheduled_delivery_on_to?: string | undefined
      /** 数量ケース */
      reservable_case_count?: number | undefined
      /** 数量バラ */
      reservable_bottle_count?: number | undefined
      /** 総バラ数 */
      total_count?: number | undefined
      /** 取引区分 */
      stock_trade_type_cd1?: string | undefined
      /** 発注状況 */
      order_status_cd1?: string | undefined
      /** 発注先IDM */
      order_vendor_idm?: string | undefined
      /** 発注先名 */
      order_vendor_name?: string | undefined
      /** 支払先IDM */
      pay_vendor_idm?: string | undefined
      /** 支払先名 */
      pay_vendor_name?: string | undefined
      /** 支払条件IDM */
      payment_condition_idm?: string | undefined
      /** 支払条件名 */
      payment_condition_name?: string | undefined
      /** 発注日From */
      ordered_on_from?: string | undefined
      /** 発注日To */
      ordered_on_to?: string | undefined
      /** 引取日From */
      pickup_on_from?: string | undefined
      /** 引取日To */
      pickup_on_to?: string | undefined
      /** 発注担当者IDM */
      user_idm?: string | undefined
      /** 発注担当者名 */
      user_name?: string | undefined
      /** 商品マスタBY_IDM */
      invent_buyer_user_idm?: string | undefined
      /** 商品マスタBY_名 */
      invent_buyer_user_name?: string | undefined
      /** 生産者DB書出IDM */
      winary_comment_vendor_idm?: string | undefined
      /** 別年号商品名 */
      invent_name_yearly?: string | undefined
      /** 国内受注No */
      sales_order_no?: string | undefined
      /** 国内受注行No */
      sales_order_detail_line_no?: number | undefined
      /** 国内発注内部備考 */
      domestic_order_note?: string | undefined
      /** 国内発注明細内部備考 */
      domestic_orders_detail_note?: string | undefined
      /** 得意先IDM */
      customer_idm?: string | undefined
      /** 得意先名 */
      customer_name?: string | undefined
      /** 代配店IDM */
      child_idm?: string | undefined
      /** 代配店名 */
      child_name?: string | undefined
      /** 支払期日From */
      payment_on_from?: string | undefined
      /** 支払期日To */
      payment_on_to?: string | undefined
      /** 仕入先担当者名 */
      vendor_staff_name?: string | undefined
      /** 国内発注明細行No */
      domestic_order_detail_line_no?: number | undefined
      /** 計上日 */
      purchase_result_record_on?: string | undefined
      /** 在庫・仕入計上実績が紐づいているか否か */
      has_purchase_result?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.DomesticOrder[]
      total: number
    }
  }

  /** 国内発注を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.DomesticOrderBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.DomesticOrderBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
