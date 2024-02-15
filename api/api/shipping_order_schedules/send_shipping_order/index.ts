/* eslint-disable */
export type Methods = {
  /** 船積明細データ送信を実行します。 */
  post: {
    status: 204

    reqBody: {
      /** 船積オーダーIDの配列 */
      shipping_orders: {
        /** 船積オーダーID */
        shipping_order_id: number
      }[]
    }
  }
}
