/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../@types'

export type Methods = {
  /** 海外入金データ受信一覧を返します */
  get: {
    query: Types.Embed & Types.Limit
    status: 200

    /** OK */
    resBody: {
      items: Types.ForeignDepositReceipt[]
      total: number
      total_number: number
      money_transfer_amount: string
      conversion_amount: string
    }
  }

  /** 海外入金データ受信を取り込みます。 */
  post: {
    status: 200
    reqFormat: FormData

    reqBody: {
      /** 取込ファイル */
      file: (File | ReadStream)
    }
  }

  /** 海外入金データ受信を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ForeignDepositReceiptBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ForeignDepositReceiptBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
