/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 格付一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 格付IDM */
      idm?: string | undefined
      /** 格付名 */
      name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Grading[]
      total: number
    }
  }

  /** 格付を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.GradingBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.GradingBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
