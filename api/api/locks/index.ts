/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** ロック一覧を返します */
  get: {
    query: Types.Embed & Types.Limit
    status: 200

    /** OK */
    resBody: {
      items: Types.Lock[]
      total: number
    }
  }
}
