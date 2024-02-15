/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 予約受注/取置一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 伝票区分CD */
      reservation_or_stock_cd1?: string | undefined
      /** 状況区分CD */
      sales_reservation_stock_status_cd1?: string | undefined
      /** 倉庫IDM */
      location_idm?: string | undefined
      /** ピッキング分類CD */
      picking_cd1?: string | undefined
      /** 予約受注日/取置日From */
      reservation_stock_from?: string | undefined
      /** 予約受注日/取置日To */
      reservation_stock_to?: string | undefined
      /** 希望納期/取置期限From */
      request_delivery_stock_limit_from?: string | undefined
      /** 希望納期/取置期限To */
      request_delivery_stock_limit_to?: string | undefined
      /** 予約受注No/取置NoFrom */
      no_from?: string | undefined
      /** 予約受注No/取置NoTo */
      no_to?: string | undefined
      /** 予約受注取置依頼NoFrom */
      sales_stock_request_no_from?: string | undefined
      /** 予約受注取置依頼NoTo */
      sales_stock_request_no_to?: string | undefined
      /** 次回同送 */
      is_next_shipping?: boolean | undefined
      /** WEB公開フラグ */
      is_web?: boolean | undefined
      /** 稟議承認済フラグ */
      is_approved?: boolean | undefined
      /** 明細備考 */
      external_note?: string | undefined
      /** 現物取置フラグ */
      is_physical_stock?: boolean | undefined
      /** 現物取置管理No */
      physical_stock_no?: string | undefined
      /** 相手先No */
      customer_order_no?: string | undefined
      /** 得意先品番 */
      customer_item_cd?: string | undefined
      /** 得意先IDM */
      customer_idm?: string | undefined
      /** 得意先名 */
      customer_name?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** JAN */
      barcode?: string | undefined
      /** 商品名 */
      name_denpatu?: string | undefined
      /** 原産国IDM */
      country_of_origin_idm?: string | undefined
      /** 生産者IDM */
      maker_vendor_idm?: string | undefined
      /** 生産者名 */
      maker_vendor_name_jp_abbr?: string | undefined
      /** 村IDM */
      village_idm?: string | undefined
      /** 戦略分類CD */
      strategy_type_cd1?: string | undefined
      /** 割当区分CD */
      allotment_cd1?: string | undefined
      /** 割当名称 */
      allotment_name?: string | undefined
      /** 船積オーダー記号 */
      shipping_order_symbol?: string | undefined
      /** 船積オーダーNoFrom */
      shipping_order_no_from?: string | undefined
      /** 船積オーダーNoTo */
      shipping_order_no_to?: string | undefined
      /** 国内発注NoFrom */
      domestic_order_no_from?: string | undefined
      /** 国内発注NoTo */
      domestic_order_no_to?: string | undefined
      /** 年号違いを含む */
      includes_invent_name_yearly?: string | undefined
      /** 完了・打ち切りを含むか */
      include_traded?: string | undefined
      /** 得意先グループCD */
      customer_group_cd1?: string | undefined
      /** 得意先グループ名 */
      customer_group_name?: string | undefined
      /** 業態CD */
      business_category_cd1?: string | undefined
      /** 最新担当者IDM */
      current_user_idm?: string | undefined
      /** 最新担当者当者名 */
      current_user_name?: string | undefined
      /** 伝票発行時担当者IDM */
      user_idm?: string | undefined
      /** 伝票発行時担当者名 */
      user_name?: string | undefined
      /** チームIDM */
      team_department_idm?: string | undefined
      /** 入力担当者IDM */
      operator_user_idm?: string | undefined
      /** 入力担当者名 */
      operator_user_name?: string | undefined
      /** 前入力担当者IDM */
      prev_operator_user_idm?: string | undefined
      /** 前入力担当者名 */
      prev_operator_user_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.VSalesReservationStock[]
      total: number
    }
  }

  /** 予約受注/取置を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.VSalesReservationStockBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.VSalesReservationStockBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
