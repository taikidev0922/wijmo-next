/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** フリータイム一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 船社IDM */
      ship_company_idm?: string | undefined
      /** 船社名 */
      ship_company_name?: string | undefined
      /** コンテナサイズCD */
      container_size_cd1?: string | undefined
      /** コンテナ仕様CD */
      container_type_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.FreeTime[]
      total: number
    }
  }

  /** フリータイムを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.FreeTimeBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.FreeTimeBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
