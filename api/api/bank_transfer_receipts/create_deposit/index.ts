/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 振込データを取り込みます */
  post: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。入金登録した結果が反映されます。 */
      items?: Types.BankTransferReceipt[] | undefined
    }

    reqBody: {
      /** 追入金登録するオブジェクトの配列 */
      items?: Types.BankTransferReceiptDepositTarget[] | undefined
    } & Types.BulkRequest
  }
}
