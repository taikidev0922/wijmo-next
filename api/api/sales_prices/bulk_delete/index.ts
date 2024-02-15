/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 販売単価を削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。削除した結果が反映されます。 */
      items?: Types.SalesPriceBulkTarget[] | undefined
    }

    reqBody: {
      /** 削除するオブジェクトの配列 */
      items?: Types.SalesPriceBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
