/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 棚卸実績一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & {
      /** 棚卸月 */
      inventory_month: string
      /** 状況区分 */
      inventory_type_cd1: string
      /** 倉庫ID */
      location_idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.InventoryResult[]
      total: number
    }
  }

  /** 棚卸実績を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.InventoryResultBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.InventoryResultBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
