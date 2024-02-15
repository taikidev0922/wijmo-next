/* eslint-disable */
export type Methods = {
  /** 口座振替依頼データを出力します。 */
  post: {
    status: 200

    reqBody: {
      /** 口座振替依頼IDの配列 */
      ids: number[]
    }
  }
}
