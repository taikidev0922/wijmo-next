/* eslint-disable */
export type Methods = {
  /** 原価計算回覧用を出力します。 */
  post: {
    status: 200

    reqBody: {
      /** 入荷原価ヘッダIDの配列 */
      ids: number[]
      /** 原価反映日From */
      cost_updated_on_from?: string | undefined
      /** 原価反映日To */
      cost_updated_on_to?: string | undefined
    }
  }
}
