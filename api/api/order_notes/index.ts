/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 発注者覚書一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 発注者覚書IDM */
      idm?: string | undefined
      /** 発注者覚書 */
      name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.OrderNote[]
      total: number
    }
  }

  /** 発注者覚書を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.OrderNoteBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.OrderNoteBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
