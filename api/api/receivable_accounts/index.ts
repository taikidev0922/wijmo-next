/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 売掛残高一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 国内・海外区分 */
      domestic_foreign_cd1?: string[] | undefined
      /** 売掛年月From */
      sale_year_month_from?: string | undefined
      /** 売掛年月To */
      sale_year_month_to?: string | undefined
      /** 担当者IDM */
      user_idm?: string | undefined
      /** 担当者名 */
      user_name?: string | undefined
      /** 得意先IDM */
      customer_idm?: string | undefined
      /** 得意先名 */
      customer_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.ReceivableAccount[]
      total: number
    }
  }
}
