/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 添加物一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 添加物ID */
      id?: number | undefined
      /** 物質名 */
      name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Additive[]
      total: number
    }
  }

  /** 添加物を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.AdditiveBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.AdditiveBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
