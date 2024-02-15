/* eslint-disable */
export type Methods = {
  /** 搬入スケジュールフリータイム計算を行い一覧で返します */
  post: {
    status: 200

    /** OK */
    resBody: {
      items?: {
        /** 船積オーダーID */
        shipping_order_id?: number | undefined
        /** フリータイムID */
        free_time_id?: number | null | undefined
        /** フリータイム最終日 */
        last_free_time_on?: string | null | undefined
        /** フリータイム超過日数 */
        free_time_over_days?: number | null | undefined
        /** フリータイム超過金額 */
        free_time_amount?: number | null | undefined
        /** フリータイム内部備考 */
        note?: string | null | undefined
      }[] | undefined
    }

    reqBody: {
      items?: {
        /** 船積オーダーID */
        shipping_order_id?: number | undefined
        /** 船社ID */
        ship_company_id?: string | undefined
        /** コンテナサイズCD */
        container_size_cd1?: string | undefined
        /** コンテナ仕様CD */
        container_type_cd1?: string | undefined
        /** 入港日 */
        eta_on?: string | undefined
        /** 一括搬入日 */
        imported_on?: string | undefined
        /** 倉庫搬入日 */
        carried_on?: string | undefined
      }[] | undefined
    }
  }
}
