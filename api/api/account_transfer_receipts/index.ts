/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../@types'

export type Methods = {
  /** 口座振替結果データを取り込みます */
  post: {
    status: 200

    /** OK */
    resBody: {
      total_count?: number | undefined
      duplicate_count?: number | undefined
      import_count?: number | undefined
    }

    reqFormat: FormData

    reqBody: {
      /** ファイル */
      file?: (File | ReadStream) | undefined
    }
  }

  /** 口座振替データ受信一覧データを取得します */
  get: {
    query: Types.Embed & Types.Limit
    status: 200

    /** OK */
    resBody: {
      items: Types.AccountTransferReceipt[]
      total: number
      transfer_successed_number: number
      transfer_successed_amount: string
      transfer_failed_number: number
      transfer_failed_amount: string
    }
  }

  /** 口座振替データ受信を削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。削除した結果が反映されます。 */
      items?: Types.AccountTransferReceiptBulkTarget[] | undefined
    }

    reqBody: {
      /** 追削除するオブジェクトの配列 */
      items?: Types.AccountTransferReceiptBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
