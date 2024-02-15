/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 出荷可能商品一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 得意先グループCD */
      customer_group_cd1?: string | undefined
      /** 得意先IDM */
      customer_idm?: string | undefined
      /** 品目区分CD */
      item_group_cd1?: string | undefined
      /** 商品IDM */
      invent_idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.ShippableInvent[]
      total: number
    }
  }

  /** 出荷可能商品を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ShippableInventBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ShippableInventBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
