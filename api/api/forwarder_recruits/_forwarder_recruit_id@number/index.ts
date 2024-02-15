/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** フォワーダー採用を取得します */
  get: {
    query?: Types.Embed & Types.With_deleted | undefined
    status: 200
    /** OK */
    resBody: Types.ForwarderRecruit
  }
}
