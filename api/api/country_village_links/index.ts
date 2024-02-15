/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 原産国～村紐付一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 原産国ID */
      country_of_origin_id?: number | undefined
      /** 原産国IDM */
      country_of_origin_idm?: string | undefined
      /** 地方ID */
      wine_area_id?: number | undefined
      /** 地方IDM */
      wine_area_idm?: string | undefined
      /** 地区ID */
      area_id?: number | undefined
      /** 地区IDM */
      area_idm?: string | undefined
      /** 村ID */
      village_id?: number | undefined
      /** 村IDM */
      village_idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.CountryVillageLink[]
      total: number
    }
  }

  /** 原産国～村紐付を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.CountryVillageLinkBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.CountryVillageLinkBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
