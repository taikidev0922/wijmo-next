/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 外貨資金繰り一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 対象年月 */
      year_month: string
      /** 通貨 */
      currency_cd1: string
      /** 銀行口座IDM */
      bank_account_idm: string
      /** 使用目的 */
      foreign_currency_purpose_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.ForeignCurrencyManagement[]
      total: number
    }
  }
}
