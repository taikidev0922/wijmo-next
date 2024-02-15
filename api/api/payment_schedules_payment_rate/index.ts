/* eslint-disable */
export type Methods = {
  /** 支払レートを取得します */
  get: {
    query?: {
      /** 予約オーダーNo。船積オーダーNoといずれかは必須 */
      shipping_reservation_display_no?: string | undefined
      /** 船積オーダーNo。予約オーダーNoといずれかは必須 */
      shipping_order_display_no?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 支払先ID */
      pay_vendor_id?: number | undefined
      /** 年号 */
      vintage?: string | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      /** 支払レート */
      pay_rate?: string | undefined
    }
  }
}
