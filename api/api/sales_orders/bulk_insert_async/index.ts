/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../@types'

export type Methods = {
  /** 国内受注を受注データファイルから一括登録します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。 */
  post: {
    query?: Types.Embed & {
      /** 下書きかどうか */
      is_draft?: boolean | undefined
      /** 警告を無視するかどうか */
      forced?: boolean | undefined
    } | undefined

    status: 200
    /** OK */
    resBody: Types.BatchHistory
    reqFormat: FormData

    reqBody: {
      /** 受注データファイル。 */
      file?: (File | ReadStream) | undefined
    }
  }
}
