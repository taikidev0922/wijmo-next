/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 地方一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 地方IDM */
      idm?: string | undefined
      /** 地方名(和文) */
      name?: string | undefined
      /** 地方名(欧文) */
      name_en?: string | undefined
      /** 地方名(中国語) */
      name_zh?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.WineArea[]
      total: number
    }
  }

  /** 地方を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.WineAreaBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.WineAreaBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
