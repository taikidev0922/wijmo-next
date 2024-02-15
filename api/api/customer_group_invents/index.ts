/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 得意先グループ商品一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 得意先グループCD */
      customer_group_cd1?: string | undefined
      /** 相手先商品CD */
      customer_item_cd?: string | undefined
      /** 商品ID */
      invent_id?: number | undefined
      /** 商品IDM */
      invent_idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.CustomerGroupInvent[]
      total: number
    }
  }

  /** 得意先グループ商品を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.CustomerGroupInventBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.CustomerGroupInventBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
