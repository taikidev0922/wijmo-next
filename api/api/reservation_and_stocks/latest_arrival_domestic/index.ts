/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 指定(なければ直近)の船積オーダーを取得します */
  get: {
    query?: Types.Embed & {
      /** 商品ID */
      invent_id?: number | undefined
      /** 指定日以降の入荷予定直近を取得する。指定なければシステム日付以降を取得する。 */
      min_will_arrive_on?: string | undefined
      /** 指定数以上確保可能な 国内発注を取得します。 */
      min_reservation_count?: number | undefined
      /** 国内発注No 指定がある場合はmin_will_arrive_on、min_reservation_countを無視して指定Noのデータを表示する。 */
      domestic_order_no?: string | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 商品ID */
        invent_id?: number | undefined
        /** 国内発注ID */
        domestic_order_id?: number | null | undefined
        /** 国内発注明細ID */
        domestic_order_detail_id?: number | null | undefined
        /** 国内発注No */
        domestic_order_no?: string | null | undefined
        /** 予定納期 */
        scheduled_delivery_on?: string | null | undefined
        /** 入荷予定ケース数 */
        case_count?: number | null | undefined
        /** 入荷予定バラ数 */
        bottle_count?: number | null | undefined
        /** 予約受注総バラ数 */
        reserved_bottle_count?: number | null | undefined
        /** 確保可能バラ数 */
        available_stock?: number | null | undefined
        /** 入荷予定年号 */
        will_arrival_vintage?: string | null | undefined
        /** 備考(営業用) */
        note?: string | null | undefined
      }[]
      total: number
    }
  }
}
