/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 国内受注を追加更新削除します。応答には user_logs も含まれます。embed はバッチ出力に対する指示になります。 */
  post: {
    query?: Types.Embed | undefined
    status: 200
    /** OK */
    resBody: Types.BatchHistory

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.SalesOrderBulkTarget[] | undefined
      /** 国内受注明細が全て削除されたときに、国内受注を削除するかどうか */
      delete_empty_headers?: boolean | undefined
      /** 得意先マスタの次回調整金額をクリアするかどうか */
      clear_customer_next_adjustment?: boolean | undefined
    } & Types.BulkRequest
  }
}
