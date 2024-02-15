/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 口座振替依頼一覧データを取得します */
  get: {
    query: Types.Limit & Types.With_deleted & {
      /** 振替日 */
      transfer_on?: string | undefined
      /** 対象外データを表示 */
      is_not_target?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.AccountTransferRequestDetail[]
      total: number
    }
  }

  /** 口座振替依頼を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.AccountTransferRequestBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.AccountTransferRequestBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
