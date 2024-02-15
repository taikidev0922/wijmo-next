/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 地区一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 地区IDM */
      idm?: string | undefined
      /** 地区名(和文) */
      name?: string | undefined
      /** 地区名(欧文) */
      name_en?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Area[]
      total: number
    }
  }

  /** 地区を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.AreaBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.AreaBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
