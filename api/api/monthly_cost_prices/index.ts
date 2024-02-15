/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 月別商品別原価単価一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 品番 */
      invent_idm: string
      /** 年月 */
      year_month: string
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.MonthlyCostPrice[]
      total: number
    }
  }
}
