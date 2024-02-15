/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 原産国一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 原産国IDM */
      idm?: string | undefined
      /** 原産国名(和文) */
      name?: string | undefined
      /** 原産国名(欧文) */
      name_en?: string | undefined
      /** 原産国名(中国語) */
      name_zh?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.CountryOfOrigin[]
      total: number
    }
  }

  /** 原産国を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.CountryOfOriginBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.CountryOfOriginBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
