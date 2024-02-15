/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 予約オーダー残有支払先の一覧を取得します。 */
  get: {
    query?: Types.Embed & Types.With_deleted | undefined
    status: 200

    /** OK */
    resBody: {
      items: (Types.Vendor)[]
      total: number
    }
  }
}
