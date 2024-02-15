/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 村一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 村IDM */
      idm?: string | undefined
      /** 村名(和文) */
      name?: string | undefined
      /** 村名(欧文) */
      name_en?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Village[]
      total: number
    }
  }

  /** 村を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.VillageBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.VillageBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
