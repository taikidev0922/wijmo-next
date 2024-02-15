/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../@types'

export type Methods = {
  /** 得意先を一括更新します。 */
  post: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.CustomerBulkTarget[] | undefined
    }

    reqFormat: FormData

    reqBody: {
      /** 一括更新ファイル。 */
      file?: (File | ReadStream) | undefined
    }
  }
}
