/* eslint-disable */
export type Methods = {
  /** 検品期日データを出力します。 */
  post: {
    status: 200

    reqBody: {
      /** 船積オーダー明細IDの配列 */
      ids: number[]
    }
  }
}
