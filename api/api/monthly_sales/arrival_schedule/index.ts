/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 次回以降入荷予定一覧データを取得します */
  get: {
    query: Types.Embed & {
      /** 品番 */
      invent_idm: string
      /** 年号 */
      vintage?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 入荷予定日 */
        will_arrive_on: string
        /** 船積オーダーNo */
        shipping_order_no?: string | null | undefined
        /** 国内発注No */
        domestic_order_no?: string | null | undefined
        /** 年号 */
        vintage?: string | null | undefined
        /** ケース */
        case_count: number
        /** バラ */
        bottle_count: number
        /** 入荷予定備考 */
        arrival_schedule_note?: string | null | undefined
        /** 営業用入荷予定備考 */
        arrival_schedule_user_note?: string | null | undefined
        /** 予約受注数(ケース) */
        reserved_case_count: number
        /** 予約受注数(バラ) */
        reserved_bottle_count: number
      }[]
      total: number
    }
  }
}
