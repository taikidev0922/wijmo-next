/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 入金予定をゼロ円で作成します */
  post: {
    status: 200

    /** OK */
    resBody: {
      items: Types.DepositScheduleBulkTarget[]
    }

    reqBody: {
      items?: (Types.BulkTarget & {
        /** 入金先ID */
        deposit_customer_id: number
        /** 入金先IDM */
        deposit_customer_idm: string
        /** 得意先ID */
        customer_id: number
        /** 得意先IDM */
        customer_idm: string
        /** 与信管理区分 */
        yoshin_cd1?: string | null | undefined
        /** 発生請求締日 */
        bill_result_billing_on?: string | null | undefined
        /** 入金予定日 */
        will_deposit_on: string
        /** 入金方法 */
        deposit_type_cd1?: string | null | undefined
        /** 通貨CD */
        currency_cd1?: string | null | undefined
      })[] | undefined
    } & Types.BulkRequest
  }
}
