/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../@types'

export type Methods = {
  /** 商品を一括更新します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。 */
  post: {
    query?: Types.Embed & Types.Lock_key1 & Types.Lock_page_id | undefined
    status: 200
    /** OK */
    resBody: Types.BatchHistory
    reqFormat: FormData

    reqBody: {
      /** 一括更新ファイル。 */
      file?: (File | ReadStream) | undefined
    }
  }
}
