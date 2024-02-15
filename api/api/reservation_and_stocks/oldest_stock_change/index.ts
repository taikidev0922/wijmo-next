/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 指定の品番、倉庫IDMに該当するうち、依頼日が最も古い在庫振替Noを取得します。 */
  get: {
    query: Types.Embed & {
      /** 品番 */
      invent_idm: string
      /** 倉庫IDM */
      location_idm: string
    }

    status: 200

    /** OK */
    resBody: {
      /** 在庫振替No */
      stock_change_no?: string | null | undefined
    }
  }
}
