/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 時点残高情報一覧を返します */
  get: {
    query: Types.Limit & Types.With_deleted & {
      /** 対象年月日 */
      date: string
      /** 通貨 */
      currency_cd1?: string | undefined
      /** 銀行口座IDM */
      bank_account_idm?: string | undefined
      /** 使用目的 */
      foreign_currency_purpose_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.ForeignCurrencyManagementBalance[]
      total: number
    }
  }
}
