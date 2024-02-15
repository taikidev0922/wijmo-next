/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 船積オーダーラベル手配を更新します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ShippingOrderLabelBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ShippingOrderLabelBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
