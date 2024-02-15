/* eslint-disable */
export type Methods = {
  /** 指定月以降の仕入予定表を出力します */
  post: {
    status: 200

    reqBody: {
      /** 開始年月 */
      start_year_month?: string | undefined
    }
  }
}
