/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 支払期日一覧明細 */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** データ判別用 */
      data_type?: string | undefined
      /** 支払先IDM */
      vendor_idm?: string | undefined
      /** 支払条件Id */
      payment_condition_idm?: string | undefined
      /** PF Invoice No. */
      invoice_no?: string | undefined
      /** 船積オーダーId */
      shipping_order_id?: number | undefined
      /** 予約オーダーId */
      shipping_reservation_id?: number | undefined
      /** 支払実績Id */
      payment_result_id?: number | undefined
      /** 期日確定区分 */
      fixed_payment_date_cd1?: string | undefined
      /** 支払期日 */
      payment_on?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.PaymentDueDetail[]
    }
  }
}
