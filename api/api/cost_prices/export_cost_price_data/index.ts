/* eslint-disable */
export type Methods = {
  /** 原価データを出力します。 */
  post: {
    status: 200

    reqBody: {
      /** 船積オーダーNo */
      display_no?: string | undefined
      /** 許可記号 */
      mark?: string | undefined
      /** 出力フォルダパス */
      output_folder_path: string
    }
  }
}
