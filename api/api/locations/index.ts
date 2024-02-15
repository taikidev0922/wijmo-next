/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 倉庫一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 倉庫IDM */
      idm?: string | undefined
      /** 倉庫名 */
      name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Location[]
      total: number
    }
  }

  /** 倉庫を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.LocationBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.LocationBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
