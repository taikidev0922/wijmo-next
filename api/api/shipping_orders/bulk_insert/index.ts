/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../@types'

export type Methods = {
  /** 船積オーダーデータを取り込みます。 */
  post: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新の結果を返します。 */
      items?: Types.ShippingOrderBulkTarget[] | undefined
    }

    reqFormat: FormData

    reqBody: {
      /** 船積オーダーデータファイル。 */
      file?: (File | ReadStream) | undefined
    }
  }
}
