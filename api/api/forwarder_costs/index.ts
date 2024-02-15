/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** フォワーダー費用テンプレート一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** フォワーダー費用テンプレートID */
      id?: number | undefined
      /** 仕入先IDM */
      vendor_idm?: string | undefined
      /** 仕入先名 */
      vendor_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.ForwarderCost[]
      total: number
    }
  }

  /** フォワーダー費用テンプレートを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ForwarderCostBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ForwarderCostBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
