/* eslint-disable */
export type Methods = {
  /** 計算した特別単価を返します */
  get: {
    query: {
      /** 得意先IDM */
      customer_idm?: string | undefined
      /** 売上日 */
      sold_on: string
      /** 品番 */
      invent_idm: string
      /** ケース数 */
      case_count?: number | undefined
      /** バラ数 */
      bottle_count?: number | undefined
    }

    status: 200

    /** OK */
    resBody: {
      /** バラ特別単価 */
      bt_special_price?: string | null | undefined
      /** ケース特別単価 */
      cs_special_price?: string | null | undefined
    }
  }
}
