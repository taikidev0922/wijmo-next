/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** バッチパラメータを取得します */
  get: {
    query?: Types.Embed & Types.With_deleted | undefined
    status: 200
    /** OK */
    resBody: Types.BatchParameter
  }

  /** バッチを実行します */
  post: {
    status: 200
    /** OK */
    resBody: Types.BatchParameter
  }
}
