/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 運賃パターン一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 運賃パターンIDM */
      idm?: string | undefined
      /** 運賃パターン名 */
      name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.FarePattern[]
      total: number
    }
  }

  /** 運賃パターンを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.FarePatternBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.FarePatternBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
