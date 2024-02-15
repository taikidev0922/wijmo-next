/* eslint-disable */
export type Methods = {
  /** 単一テーブルのデータを一覧で取得し返却します */
  get: {
    query?: {
      /** 最終レコード更新日時 */
      last_updated_at?: string | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      items: {
        [key: string]: any
      }[] | null
    }
  }
}
