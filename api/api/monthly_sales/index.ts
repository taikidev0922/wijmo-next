/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 得意先別月販一覧データを取得します */
  get: {
    query: Types.Limit & Types.With_deleted & {
      /** 得意先ID */
      customer_idm?: string | undefined
      /** 得意先検索条件 */
      customer_search_condition?: boolean | undefined
      /** 担当者IDM */
      user_idm?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 得意先グループCD */
      customer_group_cd1?: string | undefined
      /** チームIDM */
      team_department_idm?: string | undefined
      /** 月販計算期間From */
      sold_from: string
      /** 月販計算期間To */
      sold_to: string
      /** 商品分類CD */
      item_type_cd1?: string | undefined
      /** 原産国IDM */
      country_of_origin_idm?: string | undefined
      /** 地方IDM */
      wine_area_idm?: string | undefined
      /** 生産者IDM */
      maker_vendor_idm?: string | undefined
      /** 色CD */
      color_cd1?: string | undefined
      /** ワイン分類CD */
      item_group_cd1?: string | undefined
      /** 戦略分類CD */
      strategy_type_cd1?: string | undefined
      /** 登録商品呼び出しID */
      product_call_id?: string | undefined
      /** 集計区分 */
      aggregate_classify?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 得意先グループCD */
        customer_group_cd1?: string | null | undefined
        /** 得意先グループ名 */
        customer_group_name?: string | null | undefined
        /** 得意先ID */
        customer_id?: number | null | undefined
        /** 得意先IDM */
        customer_idm?: string | null | undefined
        /** 得意先名 */
        customer_name?: string | null | undefined
        /** 商品ID */
        invent_id?: number | null | undefined
        /** 品番 */
        invent_idm?: string | null | undefined
        /** 商品名 */
        invent_name?: string | null | undefined
        /** 商品名(別年号用) */
        name_yearly?: string | null | undefined
        /** 入数 */
        quantity_per_case?: number | null | undefined
        /** 容量 */
        volume?: number | null | undefined
        /** 年号 */
        vintage?: string | null | undefined
        /** 生産者DB書出ID */
        winary_comment_vendor_id?: number | null | undefined
        /** 納価 */
        previous_bottle_unit_price?: string | null | undefined
        /** 希望小売価格 */
        previous_mrp?: string | null | undefined
        /** 価格改定日 */
        after_change_on?: string | null | undefined
        /** 後納価 */
        after_bottle_unit_price?: string | null | undefined
        /** 後希望小売価格 */
        after_mrp?: string | null | undefined
        /** 取置数 */
        stock_bottle_total?: number | null | undefined
        /** 有効在庫数 */
        available_stock_count?: number | null | undefined
        /** 過去平均月販数 */
        customer_sales_average?: string | null | undefined
        /** 品切予想 */
        out_of_stock_forecast?: string | null | undefined
        /** 最終納品日 */
        latest_date?: string | null | undefined
        /** 納品総本数 */
        latest_day_total_count?: number | null | undefined
        /** 割当 */
        allotment?: boolean | null | undefined
        /** 入荷予定日 */
        will_arrive_on?: string | null | undefined
        /** 入荷予定数量 */
        arrive_count?: number | null | undefined
        /** 入荷予定年号 */
        arrive_vintage?: string | null | undefined
        /** 予約受注数 */
        reserve_bottle_total?: number | null | undefined
        /** 全社平均月販 */
        all_sales_average?: string | null | undefined
        /** 船積オーダーNo */
        shipping_order_no?: string | null | undefined
        /** 国内発注No */
        domestic_order_no?: string | null | undefined
        /** 全社取置数 */
        all_stock_count?: number | null | undefined
        /** 終売区分 */
        discontinued_cd1?: string | null | undefined
        /** 特別単価(バラ) */
        special_price_bottle?: string | null | undefined
        /** 特別単価(ケース) */
        special_price_case?: string | null | undefined
        /** 特別単価(応量) */
        special_price_volume_discount?: string | null | undefined
      }[]
      total: number
    }
  }
}
