/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 在庫移動を更新します。更新のみ可能です。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.StockTransferBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: (Types.BaseModel & Types.BulkTarget)[] | undefined
    } & Types.BulkRequest
  }
}
