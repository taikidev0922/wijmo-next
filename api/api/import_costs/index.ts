/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** コストを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ImportCostBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ImportCostBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
