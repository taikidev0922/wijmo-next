/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 原産国～格付紐付一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 原産国ID */
      country_of_origin_id?: number | undefined
      /** 原産国IDM */
      country_of_origin_idm?: string | undefined
      /** 格付ID */
      grading_id?: number | undefined
      /** 格付IDM */
      grading_idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.CountryGradingLink[]
      total: number
    }
  }

  /** 原産国～格付紐付を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.CountryGradingLinkBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.CountryGradingLinkBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
