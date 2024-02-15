/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 汎用データを取得します */
  get: {
    query: Types.Limit
    status: 200

    /** OK */
    resBody: {
      items: {
        [key: string]: any
      }[] | null
    }
  }
}
