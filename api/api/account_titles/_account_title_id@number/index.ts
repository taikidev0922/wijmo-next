/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 勘定科目を取得します */
  get: {
    query?: Types.Embed & Types.With_deleted | undefined
    status: 200
    /** OK */
    resBody: Types.AccountTitle
  }
}
