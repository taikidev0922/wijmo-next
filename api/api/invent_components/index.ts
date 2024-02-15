/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 部品表一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 親品番 */
      parent_invent_idm?: string | undefined
      /** 親商品名 */
      parent_invent_name?: string | undefined
      /** 子品番 */
      child_invent_idm?: string | undefined
      /** 子商品名 */
      child_invent_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.InventComponent[]
      total: number
    }
  }

  /** 部品表を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.InventComponentBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.InventComponentBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
