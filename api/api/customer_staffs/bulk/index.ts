/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../@types'

export type Methods = {
  /** 得意先先方担当者を一括更新します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。 */
  post: {
    query?: Types.Embed & Types.Lock_key1 & Types.Lock_page_id | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.CustomerStaffBulkTarget[] | undefined
    }

    reqFormat: FormData

    reqBody: {
      /** 一括登録・更新ファイル。 */
      file?: (File | ReadStream) | undefined
    }
  }
}
