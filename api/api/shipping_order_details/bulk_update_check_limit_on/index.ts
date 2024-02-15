/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../@types'

export type Methods = {
  /** 船積オーダー検品期日データを取り込みます。 */
  post: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ShippingOrderDetailBulkTarget[] | undefined
    }

    reqFormat: FormData

    reqBody: {
      /** 検品期日データファイル。 */
      file?: (File | ReadStream) | undefined
    }
  }
}
