/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../@types'

export type Methods = {
  /** 振込データ受信一覧データを取得します */
  get: {
    query: Types.Embed & Types.Limit
    status: 200

    /** OK */
    resBody: {
      items: Types.BankTransferReceipt[]
      total: number
    }
  }

  /** 振込データを取り込みます */
  post: {
    query?: Types.Embed | undefined
    status: 200
    reqFormat: FormData

    reqBody: {
      /** 取込ファイル */
      file: (File | ReadStream)
    }
  }

  /** 振込データを取り込みます */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。削除した結果が反映されます。 */
      items?: Types.BankTransferReceiptBulkTarget[] | undefined
    }

    reqBody: {
      /** 追削除するオブジェクトの配列 */
      items?: Types.BankTransferReceiptBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
