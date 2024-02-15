/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../@types'

export type Methods = {
  /** 国内受注を受注データファイルから一括登録します。 */
  post: {
    query?: Types.Embed & {
      /** 下書きかどうか */
      is_draft?: boolean | undefined
      /** 警告を無視するかどうか */
      forced?: boolean | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.SalesOrderBulkTarget[] | undefined
    }

    reqFormat: FormData

    reqBody: {
      /** 受注データファイル。 */
      file?: (File | ReadStream) | undefined
    }
  }
}
