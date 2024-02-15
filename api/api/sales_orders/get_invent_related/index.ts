/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 国内受注商品関連情報を取得します */
  post: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      invent?: Types.Invent | undefined

      customer_invent?: Types.CustomerInvent | undefined

      sales_price?: Types.SalesPrice | undefined

      domestic_order_price?: Types.DomesticOrderPrice | undefined

      sales_stock_detail?: Types.SalesStockDetail | undefined

      /** バラ特別単価 */
      bt_special_price?: string | null | undefined
      /** ケース特別単価 */
      cs_special_price?: string | null | undefined
      /** 入荷予定日。 */
      will_arrive_on?: string | null | undefined
      /** 入荷予定数。 */
      arrival_count?: number | null | undefined
      /** 入荷予定備考 */
      arrival_schedule_note?: string | null | undefined
      /** 営業用入荷予定備考 */
      arrival_purchase_note?: string | null | undefined
      /** 直近受注単価 */
      latest_order_unit_price?: string | null | undefined
      /** 直近出荷年号 */
      latest_vintage?: string | null | undefined
      /** 直近出荷日 */
      latest_shipped_on?: string | null | undefined
      /** 有効在庫数(総バラ) */
      effective_count?: number | null | undefined
    }

    reqBody: {
      /** 商品IDM */
      invent_idm?: string | undefined
      /** 相手先商品CD */
      customer_item_cd?: string | undefined
      /** 単品バーコード */
      barcode?: string | undefined
      /** 得意先ID */
      customer_id: number
      /** 担当者ID */
      user_id: number
      /** 倉庫ID */
      location_id?: number | undefined
      /** 売上日 */
      sold_on?: string | undefined
      /** ケース数 */
      case_count?: number | undefined
      /** バラ数 */
      bottle_count?: number | undefined
      /** 総バラ数 */
      total_count?: number | undefined
      /** 除外する取置明細IDの配列 */
      excluded_sales_stock_detail_ids?: number[] | undefined
    }
  }
}
