/* eslint-disable */
export type Methods = {
  /** 入金実績に対する消込処理をします */
  put: {
    status: 200

    reqBody: {
      /** 入金実績IDの配列 */
      ids: number[]
    }
  }
}
