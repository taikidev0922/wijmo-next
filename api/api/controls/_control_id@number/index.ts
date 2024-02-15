/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** コントロールを取得します */
  get: {
    query?: Types.Embed & Types.With_deleted | undefined
    status: 200
    /** OK */
    resBody: Types.Control
  }
}
