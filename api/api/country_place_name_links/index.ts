/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 原産国～原産地呼称紐付一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 原産国ID */
      country_of_origin_id?: number | undefined
      /** 原産国IDM */
      country_of_origin_idm?: string | undefined
      /** 原産地呼称ID */
      place_of_origin_name_id?: number | undefined
      /** 原産地呼称IDM */
      place_of_origin_name_idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.CountryPlaceNameLink[]
      total: number
    }
  }

  /** 原産国～原産地呼称紐付を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.CountryPlaceNameLinkBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.CountryPlaceNameLinkBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
