/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 船社一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 船社IDM */
      idm?: string | undefined
      /** 船社名 */
      name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.ShipCompany[]
      total: number
    }
  }

  /** 船社を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ShipCompanyBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ShipCompanyBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
