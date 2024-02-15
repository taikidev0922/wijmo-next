/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 商品メモ一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 商品ID */
      invent_id?: number | undefined
      /** 商品IDM */
      invent_idm?: string | undefined
      /** 商品名 */
      invent_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.InventMemo[]
      total: number
    }
  }

  /** 商品メモを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.InventMemoBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.InventMemoBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
