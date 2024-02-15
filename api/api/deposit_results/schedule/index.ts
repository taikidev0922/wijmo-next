/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 入金予定を返します */
  get: {
    query?: Types.Embed & Types.With_deleted & {
      /** 入金先ID */
      deposit_customer_id?: number | undefined
      /** 入金実績ID */
      deposit_result_id?: number | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      items: Types.DepositSchedule[]
      total: number
    }
  }
}
