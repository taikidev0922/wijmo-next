/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 荷受先一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 得意先ID */
      customer_id?: number | undefined
      /** 得意先IDM */
      customer_idm?: string | undefined
      /** 得意先名 */
      customer_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Consignee[]
      total: number
    }
  }

  /** 荷受先を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ConsigneeBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ConsigneeBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
