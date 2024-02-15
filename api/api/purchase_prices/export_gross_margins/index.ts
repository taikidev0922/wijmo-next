/* eslint-disable */
export type Methods = {
  /** 粗利一覧を出力します。 */
  post: {
    status: 200

    reqBody: {
      /** 入荷原価ヘッダIDの配列 */
      ids: number[]
      /** 原価反映日From */
      cost_updated_on_from?: string | null | undefined
      /** 原価反映日To */
      cost_updated_on_to?: string | null | undefined
    }
  }
}
