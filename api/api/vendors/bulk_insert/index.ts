/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../@types'

export type Methods = {
  /** 仕入先を一括登録します。 */
  post: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.VendorBulkTarget[] | undefined
    }

    reqFormat: FormData

    reqBody: {
      /** 一括登録ファイル。 */
      file?: (File | ReadStream) | undefined
    }
  }
}
