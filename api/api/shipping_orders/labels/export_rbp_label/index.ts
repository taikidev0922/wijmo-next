/* eslint-disable */
export type Methods = {
  /** RBPラベルデータを出力します。 */
  post: {
    status: 200

    reqBody: {
      /** 船積オーダー明細であるかどうか。trueなら船積オーダー明細を取得。falseなら船積オーダーヘッダを取得。 */
      is_detail?: boolean | undefined
      /** 船積オーダーヘッダID/船積オーダー明細IDの配列 */
      ids: number[]
    }
  }
}
