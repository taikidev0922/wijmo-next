/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 請求締一覧を一括処理します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。 */
  post: {
    query?: Types.Embed | undefined
    status: 200
    /** OK */
    resBody: Types.BatchHistory

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.BillClosingBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
