/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 取置一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 取置No */
      no?: string | undefined
      /** 取置NoFrom */
      no_from?: string | undefined
      /** 取置NoTo */
      no_to?: string | undefined
      /** 取置状況 */
      sales_reservation_stock_header_status_cd1?: string | undefined
      /** 倉庫IDM */
      location_idm?: string | undefined
      /** 倉庫名 */
      location_name?: string | undefined
      /** ピッキング分類CD */
      picking_cd1?: string | undefined
      /** 取置日From */
      stock_from?: string | undefined
      /** 取置日To */
      stock_to?: string | undefined
      /** 取置期限From */
      stock_limit_from?: string | undefined
      /** 取置期限To */
      stock_limit_to?: string | undefined
      /** 依頼伝票No */
      request_no?: string | undefined
      /** 依頼伝票From */
      request_no_from?: string | undefined
      /** 依頼伝票To */
      request_no_to?: string | undefined
      /** WEB公開含む */
      is_web?: boolean | undefined
      /** 次回同送のみ */
      is_next_shipping?: boolean | undefined
      /** 現物取置フラグ */
      is_physical_stock?: boolean | undefined
      /** 現物取置管理No */
      physical_stock_no?: string | undefined
      /** 入力得意先IDM */
      customer_idm?: string | undefined
      /** 入力得意先名 */
      customer_name?: string | undefined
      /** 得意先IDM */
      parent_idm?: string | undefined
      /** 得意先名 */
      parent_name?: string | undefined
      /** 代配店IDM */
      child_idm?: string | undefined
      /** 代配店名 */
      child_name?: string | undefined
      /** 割当区分 */
      allotment_cd1?: string | undefined
      /** 割当名称 */
      allotment_name?: string | undefined
      /** 得意先グループCD */
      customer_group_cd1?: string | undefined
      /** 得意先グループ名 */
      customer_group_name?: string | undefined
      /** 業態CD */
      business_category_cd1?: string | undefined
      /** 伝票発行時担当者IDM */
      user_idm?: string | undefined
      /** 伝票発行時担当者名 */
      user_name?: string | undefined
      /** チームIDM */
      team_department_idm?: string | undefined
      /** チーム名 */
      team_department_name?: string | undefined
      /** 入力担当者IDM */
      operator_user_idm?: string | undefined
      /** 入力担当者名 */
      operator_user_name?: string | undefined
      /** 状況区分CD */
      sales_reservation_stock_status_cd1?: string | undefined
      /** 稟議承認済フラグ */
      is_approved?: boolean | undefined
      /** 明細備考 */
      external_note?: string | undefined
      /** 相手先No */
      customer_order_no?: string | undefined
      /** 得意先品番 */
      customer_item_cd?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** JAN */
      barcode?: string | undefined
      /** 商品名 */
      name_denpatu?: string | undefined
      /** 原産国IDM */
      country_of_origin_idm?: string | undefined
      /** 原産国名 */
      country_of_origin_name?: string | undefined
      /** 生産者IDM */
      maker_vendor_idm?: string | undefined
      /** 生産者名 */
      maker_vendor_name_jp_abbr?: string | undefined
      /** 村IDM */
      village_idm?: string | undefined
      /** 村名 */
      village_name?: string | undefined
      /** 戦略分類 */
      strategy_type_cd1?: string | undefined
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
      /** 完了・打ち切りを含むかのフラグ */
      is_include_traded?: boolean | undefined
      /** 割当使用可のみ */
      is_free_stock?: boolean | undefined
      /** 割当担当者IDM */
      stock_user_idm?: string | undefined
      /** 割当担当者名 */
      stock_user_name?: string | undefined
      /** 受注引当不可かどうか。trueなら受注引当不可のものを取得。falseなら受注引当可能なものを取得。nullなら全て取得。 */
      is_not_sales_order?: boolean | undefined
      /** 条件に一致する取置のうち、現在時刻以前で最新の取置のみ取得 */
      only_latest?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.SalesStock[]
      total: number
    }
  }

  /** 取置を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.SalesStockBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.SalesStockBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
