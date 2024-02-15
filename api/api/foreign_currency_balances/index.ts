/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 外貨残高一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 通貨CD */
      currency_cd1?: string | undefined
      /** 使用目的CD */
      foreign_currency_purpose_cd1?: string | undefined
      /** 銀行口座IDM */
      bank_account_idm?: string | undefined
      /** 銀行口座名 */
      bank_account_name?: string | undefined
      /** 計上日From */
      posted_on_from?: string | undefined
      /** 計上日To */
      posted_on_to?: string | undefined
      /** 残高管理対象外フラグ */
      is_out_of_balance?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: (Types.ForeignCurrencyBalance & {
        /** 計上日 */
        posted_on?: string | null | undefined
      })[]
      total: number
    }
  }
}
