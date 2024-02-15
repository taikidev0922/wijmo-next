/* eslint-disable */
export type Methods = {
  /** 海外のインターネットバンキング用支払データを出力します。 */
  post: {
    status: 200

    reqBody: {
      /** 海外支払予定IDの配列 */
      payment_result_ids?: number[] | undefined
    }
  }
}
