/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 価格グループ一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 価格グループIDM */
      idm?: string | undefined
      /** 価格グループ名 */
      name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.PriceGroup[]
      total: number
    }
  }

  /** 価格グループを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.PriceGroupBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.PriceGroupBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
