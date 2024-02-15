/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** ロックを解除します。 */
  post: {
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。削除した結果が反映されます。 */
      items?: Types.UnlockTarget[] | undefined
    }

    reqBody: {
      /** ロック解除するオブジェクトの配列 */
      items?: Types.UnlockTarget[] | undefined
    } & Types.BulkRequest
  }
}
