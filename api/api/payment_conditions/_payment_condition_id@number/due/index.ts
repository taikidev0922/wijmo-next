/* eslint-disable */
export type Methods = {
  /** 支払条件を元に支払期日を取得します */
  get: {
    query?: {
      /** 発注日 */
      ordered_on?: string | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      /** 支払期日 */
      on?: string | undefined
    }
  }
}
