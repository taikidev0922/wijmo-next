/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../@types'

export type Methods = {
  /** 作業料（コスト）データを取り込みます。 */
  post: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ImportCheckCostFileBulkTarget[] | undefined
    }

    reqFormat: FormData

    reqBody: {
      /** 作業料（コスト）データファイル。 */
      file?: (File | ReadStream) | undefined
    }
  }
}
