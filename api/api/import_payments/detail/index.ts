/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 輸入支払予定・実績入力一覧 */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** INV_No.(商品の時のみ設定) */
      invoice_no?: string | undefined
      /** 管理部受領日(商品の時のみ設定) */
      receipt_management_on?: string | undefined
      /** 支払対象区分 */
      payment_target_cd1?: string | undefined
      /** 支払区分(商品の時のみ設定) */
      payment_type_cd1?: string | undefined
      /** 支払先ID */
      vendor_id?: number | undefined
      /** 支払条件ID */
      payment_condition_id?: number | undefined
      /** 通貨 */
      currency_cd1?: string | undefined
      /** 支払期日 */
      payment_on?: string | undefined
      /** 支払実績ID */
      payment_result_id?: number | undefined
      /** 船積オーダーNo */
      shipping_order_no?: string | undefined
      /** 予約オーダー表示No */
      shipping_reservation_display_no?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.PaymentDueDetail[]
    }
  }
}
