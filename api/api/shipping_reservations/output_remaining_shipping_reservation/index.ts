/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 支払先別予約オーダー残データを出力します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.BatchHistory[]

    reqBody: {
      /** 支払先IDの配列 */
      ids: number[]
      /** 前渡残確認期日 */
      confirmation_due_date: string
    }
  }
}
