/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 年号別商品一覧データを取得します */
  get: {
    query: Types.Embed & Types.Limit & {
      /** 倉庫IDM */
      location_idm: string
      /** 商品名(別年号用) */
      invent_name_yearly?: string | undefined
      /** 生産者DB書出ID */
      winary_comment_vendor_id?: number | undefined
      /** 販売 */
      on_sale?: boolean | undefined
      /** 在庫限り */
      limited_stock?: boolean | undefined
      /** 終売 */
      end_of_sale?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 倉庫名 */
        location_name?: string | null | undefined
        /** 品番 */
        invent_idm?: string | null | undefined
        /** 商品名 */
        invent_name?: string | null | undefined
        /** 年号 */
        vintage?: string | null | undefined
        /** 容量 */
        volume?: number | null | undefined
        /** 終売区分 */
        discontinued_cd1?: string | null | undefined
        /** 有効在庫数 */
        available_stock_count?: number | null | undefined
        /** 入荷予定日 */
        will_arrive_on?: string | null | undefined
        /** 入荷予定数 */
        arrive_count?: string | null | undefined
        /** 納価 */
        before_bottle_unit_price?: string | null | undefined
        /** 希望小売価格 */
        before_mrp?: string | null | undefined
        /** 改定後納価 */
        after_bottle_unit_price?: string | null | undefined
        /** 改定後希望小売価格 */
        after_mrp?: string | null | undefined
        /** 改定日 */
        after_change_on?: string | null | undefined
      }[]
      total: number
    }
  }
}
