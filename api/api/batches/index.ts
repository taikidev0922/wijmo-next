/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** バッチ一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted
    status: 200

    /** OK */
    resBody: {
      items: Types.Batch[]
      total: number
    }
  }
}
