/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 海外入金データの入金登録をします。 */
  post: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ForeignDepositReceipt[] | undefined
    }

    reqBody: {
      /** 更新するオブジェクトの配列 */
      items?: Types.ForeignDepositReceiptDepositTarget[] | undefined
    } & Types.BulkRequest
  }
}
