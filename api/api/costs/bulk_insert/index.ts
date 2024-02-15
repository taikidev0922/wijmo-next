/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../@types'

export type Methods = {
  /** コストデータを取り込みます。 */
  post: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ImportCostFileBulkTarget[] | undefined
    }

    reqFormat: FormData

    reqBody: {
      /** コストデータファイル。 */
      file?: (File | ReadStream) | undefined
    }
  }
}
