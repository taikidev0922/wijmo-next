/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 国内受注運賃確認用一覧を返します */
  get: {
    query: Types.With_deleted & {
      /** 売上日 */
      sold_on: string
      /** 得意先IDM */
      customer_idm: string
    }

    status: 200

    /** OK */
    resBody: {
      fare_patterns: Types.FarePattern[]
      wines: Types.FareSummary[]
      jplqs: Types.FareSummary[]
      others: Types.FareSummary[]
      fare_totals: Types.FareSummary[]
    }
  }
}
