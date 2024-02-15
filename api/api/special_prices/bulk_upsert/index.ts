/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../@types'

export type Methods = {
  /** 特別単価を一括登録更新します。 */
  post: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新の結果を返します。 */
      items?: Types.BulkTarget[] | undefined
    }

    reqFormat: FormData

    reqBody: {
      /** 一括登録更新ファイル。 */
      file?: (File | ReadStream) | undefined
    }
  }
}
