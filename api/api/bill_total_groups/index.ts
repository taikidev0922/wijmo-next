/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 合計請求書グループ一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & {
      /** 合計請求書グループID */
      idm?: string | undefined
      /** 合計請求書グループ名 */
      name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.BillTotalGroup[]
      total: number
    }
  }

  /** 合計請求書グループを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.BillTotalGroupBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.BillTotalGroupBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
