/* eslint-disable */
export type Methods = {
  /** 搬入予定カレンダー、モトックスカレンダー一覧を返します */
  get: {
    query?: {
      /** 倉庫IDM */
      location_idm?: string | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      weekly?: {
        /** 営業日 */
        exec_on?: string | undefined
        /** 稼働フラグ */
        enabled?: boolean | undefined
        /** 搬入予定コンテナ数 */
        container_count?: number | undefined
        /** 曜日No */
        week?: string | undefined
        /** 曜日(和文) */
        week_jp?: string | undefined
      }[] | undefined
      calendar?: {
        /** 営業日 */
        exec_on?: string | undefined
        /** 稼働フラグ */
        enabled?: boolean | undefined
        /** 曜日No */
        week?: string | undefined
        /** 曜日(和文) */
        week_jp?: string | undefined
      }[] | undefined
    }
  }
}
