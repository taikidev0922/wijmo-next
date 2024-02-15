/* eslint-disable */
export type Methods = {
  /** インターネットバンキング用支払いデータを出力します。 */
  post: {
    status: 200

    reqBody: {
      /** 国内支払実績IDの配列 */
      ids: number[]
    }
  }
}
