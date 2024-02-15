/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。 */
  post: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。削除した結果が反映されます。 */
      items?: Types.AccountTransferReceipt[] | undefined
    }

    reqBody: {
      /** 追削除するオブジェクトの配列 */
      items?: Types.AccountTransferReceiptDepositTarget[] | undefined
    } & Types.BulkRequest
  }
}
