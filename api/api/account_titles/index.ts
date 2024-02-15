/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 勘定科目一覧を返します */
  get: {
    query: Types.Embed & Types.Limit
    status: 200

    /** OK */
    resBody: {
      items: Types.AccountTitle[]
      total: number
    }
  }
}
