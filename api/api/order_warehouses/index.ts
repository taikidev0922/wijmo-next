/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 倉庫依頼一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 倉庫依頼IDM */
      idm?: string | undefined
      /** 倉庫依頼 */
      name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.OrderWarehouse[]
      total: number
    }
  }

  /** 倉庫依頼を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.OrderWarehouseBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.OrderWarehouseBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
