/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 倉庫別月別在庫受払集計データを取得します */
  get: {
    query: Types.Embed & Types.Limit & {
      /** 年月 */
      year_month: string
      /** 倉庫IDM */
      location_idm?: string | undefined
      /** 倉庫名 */
      location_name?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 商品名 */
      invent_name?: string | undefined
      /** 担当部署 */
      post_invent_cd1?: string | undefined
      /** 戦略分類 */
      strategy_type_cd1?: string | undefined
      /** 戦略分類0 */
      strategy_type_string1?: string | undefined
      /** 戦略分類1 */
      strategy_type_string2?: string | undefined
      /** 戦略分類4 */
      strategy_type_string5?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.MonthlyLocationTransactionTotal[]
      total: number
    }
  }
}
