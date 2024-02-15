/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 原産地呼称一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 原産地呼称IDM */
      idm?: string | undefined
      /** 原産地呼称名(和文) */
      name?: string | undefined
      /** 原産地呼称名(欧文) */
      name_en?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.PlaceOfOriginName[]
      total: number
    }
  }

  /** 原産地呼称を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.PlaceOfOriginNameBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.PlaceOfOriginNameBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
