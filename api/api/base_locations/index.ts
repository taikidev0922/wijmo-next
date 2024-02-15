/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 倉庫拠点一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 倉庫拠点名 */
      name?: string | undefined
      /** 出庫元出荷指示必要フラグ */
      is_shipping_link?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.BaseLocation[]
      total: number
    }
  }

  /** 倉庫拠点を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.BaseLocationBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.BaseLocationBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
