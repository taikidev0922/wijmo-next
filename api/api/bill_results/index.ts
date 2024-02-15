/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 請求実績を返します */
  get: {
    query: Types.Embed & Types.Limit & {
      /** 請求締年月from */
      closed_on_year_month_from?: string | undefined
      /** 請求締年月to */
      closed_on_year_month_to?: string | undefined
      /** 締日 */
      closing_day_cd1?: string | undefined
      /** 請求先グループID */
      invoice_customer_idm?: string | undefined
      /** 請求先グループ名 */
      invoice_customer_name?: string | undefined
      /** 得意先グループCD */
      customer_group_cd1?: string | undefined
      /** 得意先グループ名 */
      customer_group_name?: string | undefined
      /** 得意先ID */
      customer_idm?: string | undefined
      /** 得意先名 */
      customer_name?: string | undefined
      /** 担当者ID */
      user_idm?: string | undefined
      /** 担当者名 */
      user_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.BillResult[]
      total: number
    }
  }
}
