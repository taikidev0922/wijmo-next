/* eslint-disable */
export type Methods = {
  /** 船積オーダー明細新品番年号区分取得と撮影区分を返します */
  post: {
    status: 200

    /** OK */
    resBody: {
      items?: {
        /** 商品ID */
        invent_id?: number | undefined
        /** 年号 */
        vintage?: string | undefined
        /** 新品番年号区分 */
        new_invent_vintage_cd1?: string | null | undefined
        /** 撮影区分 */
        shoot_type_cd1?: string | null | undefined
      }[] | undefined
    }

    reqBody: {
      items?: {
        /** 商品ID */
        invent_id?: number | undefined
        /** 年号 */
        vintage?: string | undefined
        /** 出港日 */
        etd_on?: string | undefined
        /** 船積オーダー明細ID */
        id?: number | undefined
      }[] | undefined
    }
  }
}
