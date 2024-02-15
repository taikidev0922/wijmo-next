/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 在庫単価を確定し、商品マスタに最終仕入単価を設定します。ロックの取得を指定した場合、ロックの取得に成功した後、直ちにそのロックは解放されます。 */
  post: {
    query?: Types.Lock_key1 & Types.Lock_page_id | undefined
    status: 200

    /** OK */
    resBody: {
      /** 入荷原価の配列。 */
      items?: Types.PurchasePrice[] | undefined
    }

    reqBody: {
      /** 入荷原価IDの配列 */
      ids: number[]
    }
  }
}
