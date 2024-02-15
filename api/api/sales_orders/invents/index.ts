/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 販売管理用商品一覧を取得します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 品番 */
      idm?: string | undefined
      /** 商品名(正式/和文) */
      name_jp?: string | undefined
      /** 商品名(検索用カナ) */
      name_kana?: string | undefined
      /** 販売_終売フラグCD */
      discontinued_cd1?: string | undefined
      /** 単品バーコード */
      barcode?: string | undefined
      /** ケースITFコード */
      case_itf_code?: string | undefined
      /** 年号 */
      vintage?: string | undefined
      /** 容量 */
      volume?: number | undefined
      /** 名門酒以外 */
      exclude_meimon_liquor?: boolean | undefined
      /** 夏季ドライ出荷NGのみ */
      is_summer_dry_ship_ng?: boolean | undefined
      /** LIのみ */
      is_low_intervention?: boolean | undefined
      /** 全文検索 */
      text?: string | undefined
      /** 生産者名(正式/和文) */
      maker_vendor_name_jp?: string | undefined
      /** バラ納価がこれ以上 */
      min_bottle_unit_price?: number | undefined
      /** バラ納価がこれ以下 */
      max_bottle_unit_price?: number | undefined
      /** 希望小売価格がこれ以上 */
      min_mrp?: number | undefined
      /** 希望小売価格がこれ以下 */
      max_mrp?: number | undefined
      /** 倉庫ID */
      location_id?: number | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        invent?: Types.Invent | undefined

        /** 有効在庫数 */
        effective_count?: number | null | undefined
        /** 入荷予定日 */
        will_arrive_on?: string | null | undefined
        /** 入荷予定数 */
        arrival_count?: number | null | undefined
        /** 納価 */
        bottle_unit_price?: string | null | undefined
        /** 希望小売価格 */
        mrp?: string | null | undefined
        /** 改定日 */
        after_change_on?: string | null | undefined
        /** 改定後納価 */
        after_bottle_unit_price?: string | null | undefined
        /** 改定後希望小売価格 */
        after_mrp?: string | null | undefined
      }[]
      total: number
    }
  }
}
