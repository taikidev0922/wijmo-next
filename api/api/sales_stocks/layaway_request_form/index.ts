/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 現物取置依頼書用データを取得します */
  get: {
    query?: Types.Embed & Types.With_deleted & {
      /** 取置ID */
      sales_stock_id?: number | undefined
    } | undefined

    status: 200
    /** OK */
    resBody: Types.SalesStock
  }
}
