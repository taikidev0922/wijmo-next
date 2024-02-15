/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 船積オーダー明細を別な船積オーダーへ移動更新します */
  put: {
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ShippingOrderDetailBulkTarget[] | undefined
    }

    reqBody: {
      items: {
        /** 移動元船積オーダーID */
        src_shipping_order_id: number
        /** 移動先船積オーダーID */
        id: number
        /** 操作種別 */
        operation?: string | undefined
        /** 更新カウント */
        update_count?: number | undefined
        shipping_order_details?: {
          /** 船積オーダー明細ID */
          id?: number | undefined
          /** 更新カウント */
          update_count?: number | undefined
          /** 操作種別 */
          operation?: string | undefined
        }[] | undefined
      }[]
    }
  }
}
