/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 支払期日一覧取得 */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 船積オーダーNo */
      shipping_order_display_no?: string | undefined
      /** 予約オーダーNo */
      shipping_reservation_display_no?: string | undefined
      /** 通貨CD */
      currency_cd1?: string | undefined
      /** 支払期日From */
      payment_on_from?: string | undefined
      /** 支払期日To */
      payment_on_to?: string | undefined
      /** 支払実行日From */
      paid_on_from?: string | undefined
      /** 支払実行日To */
      paid_on_to?: string | undefined
      /** 支払内部備考 */
      payment_schedule_note?: string | undefined
      /** 支払先IDM */
      vendor_idm?: string | undefined
      /** 支払先名 */
      vendor_name?: string | undefined
      /** 支払条件IDM */
      payment_condition_idm?: string | undefined
      /** 期日確定区分 */
      fixed_payment_date_cd1?: string | undefined
      /** INV_No. */
      invoice_no?: string | undefined
      /** 出港日From */
      etd_on_from?: string | undefined
      /** 出港日To */
      etd_on_to?: string | undefined
      /** 管理部未受領 */
      is_not_received?: boolean | undefined
      /** 管理部受領済 */
      is_received?: boolean | undefined
      /** OB未フラグ */
      is_ob_pending?: boolean | undefined
      /** OB済フラグ */
      is_ob_finished?: boolean | undefined
      /** BY_ID */
      buyer_user_idm?: string | undefined
      /** OP_ID */
      operator_user_idm?: string | undefined
      /** CST_ID */
      custom_user_idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.PaymentDueItem[]
    }
  }

  /** 支払予定を更新します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.PaymentScheduleBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.PaymentScheduleBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
