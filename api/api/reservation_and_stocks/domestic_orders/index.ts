/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 指定条件の国内発注情報を取得します。 */
  get: {
    query: Types.Limit & {
      /** 入荷予定日From */
      will_arrive_on_from?: string | undefined
      /** 入荷予定日To */
      will_arrive_on_to?: string | undefined
      /** 国内発注No */
      no?: string | undefined
      /** 国内発注NoFrom */
      no_from?: string | undefined
      /** 国内発注NoTo */
      no_to?: string | undefined
      /** 倉庫IDM */
      location_idm: string
      /** 品番 */
      invent_idm?: string | undefined
      /** 商品名(伝票印字品名) */
      invent_name_denpatu?: string | undefined
      /** 年号 */
      vintage?: string | undefined
      /** 依頼数 */
      request_bottle_count?: number | undefined
      /** 年号違いを含む */
      name_yearly_equals_to_idm?: string | undefined
      /** 直近のみ */
      is_most_recent?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 入荷予定日 */
        will_arrive_on?: string | undefined
        /** 国内発注ID */
        domestic_order_id?: number | undefined
        /** 国内発注No */
        no?: string | undefined
        /** 倉庫ID */
        location_id?: number | undefined
        /** 倉庫IDM */
        location_idm?: string | undefined
        /** 倉庫名 */
        location_name?: string | undefined
        /** 予約不可 */
        is_disabled_reservation?: boolean | undefined
        /** 商品ID */
        invent_id?: number | undefined
        /** 品番 */
        invent_idm?: string | undefined
        /** 商品名(伝票印字商品名) */
        invent_name_denpatu?: string | undefined
        /** 年号 */
        vintage?: string | null | undefined
        /** 内容量 */
        volume?: number | undefined
        /** 登録入数 */
        quantity_per_case?: number | undefined
        /** 入荷予定ケース数 */
        case_count?: number | undefined
        /** 入荷予定バラ数 */
        bottle_count?: number | undefined
        /** 入荷予定総バラ数 */
        total_count?: number | undefined
        /** 予約受注ケース数 */
        reserved_case_count?: number | undefined
        /** 予約受注バラ数 */
        reserved_bottle_count?: number | undefined
        /** 予約受注総バラ数 */
        reserved_total_count?: number | undefined
        /** 予約可能ケース数 */
        reservable_case_count?: number | undefined
        /** 予約可能バラ数 */
        reservable_bottle_count?: number | undefined
        /** 予約可能総バラ数 */
        reservable_total_count?: number | undefined
        /** 入荷予定備考 */
        arrival_schedule_note?: string | undefined
        /** 営業用入荷予定備考 */
        arrival_schedule_user_note?: string | undefined
      }[]
      total: number
    }
  }
}
