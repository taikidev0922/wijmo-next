/* eslint-disable */
export type Methods = {
  /** 搬入スケジュール一括搬入日計算を行い一覧で返します */
  post: {
    status: 200

    /** OK */
    resBody: {
      items?: {
        /** 船積オーダーID */
        shipping_order_id?: number | undefined
        /** 一括搬入日 */
        imported_on?: string | null | undefined
      }[] | undefined
    }

    reqBody: {
      items?: {
        /** 船積オーダーID */
        shipping_order_id?: number | undefined
        /** 入港日 */
        eta_on?: string | undefined
      }[] | undefined
    }
  }
}
