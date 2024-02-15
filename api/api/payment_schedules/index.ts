/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 支払予定一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 支払先IDM */
      vendor_idm?: string | undefined
      /** 支払先名 */
      vendor_name?: string | undefined
      /** 支払期日From */
      payment_from?: string | undefined
      /** 支払期日To */
      payment_to?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.PaymentSchedule[]
      total: number
    }
  }
}
