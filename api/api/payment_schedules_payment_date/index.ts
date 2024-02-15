/* eslint-disable */
export type Methods = {
  /** 支払期日を取得します */
  get: {
    query?: {
      /** 相殺先予約オーダーNo。相殺先船積オーダーNoといずれかは必須 */
      offset_shipping_reservation_display_no?: string | undefined
      /** 相殺先船積オーダーNo。相殺先予約オーダーNoといずれかは必須 */
      offset_shipping_order_display_no?: string | undefined
      /** 支払先ID */
      pay_vendor_id?: number | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      /** 支払期日 */
      payment_on?: string | null | undefined
    }
  }
}
