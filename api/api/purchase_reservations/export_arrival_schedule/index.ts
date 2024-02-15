/* eslint-disable */
export type Methods = {
  /** 入荷入予定表を出力します */
  post: {
    status: 200

    reqBody: {
      /** 在庫・仕入計上予定IDの配列 */
      ids: number[]
      /** 警告を無視するかどうか */
      forced?: boolean | undefined
    }
  }
}
