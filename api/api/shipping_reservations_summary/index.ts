/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 船積みオーダーのサマリを取得します */
  get: {
    query: Types.Embed & Types.With_deleted & {
      /** 予約受注明細ID */
      shipping_reservation_detail_id: number
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 船積オーダーID */
        shipping_order_id?: number | undefined
        /** 実ケース数 */
        local_case_count?: number | undefined
        /** 実バラ数 */
        local_bottle_count?: number | undefined
        /** 登録ケース数 */
        case_count?: number | undefined
        /** 登録バラ数 */
        bottle_count?: number | undefined
        shipping_order?: Types.ShippingOrder | undefined
      }[]
    }
  }
}
