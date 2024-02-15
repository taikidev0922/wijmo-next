/* eslint-disable */
export type Methods = {
  /** 請求書を出力します。 */
  post: {
    status: 204

    reqBody: {
      /** 請求締年月 */
      closed_on_year_month: string
      /** 締日 */
      closing_day_cd1: string
      /** 得意先IDMの配列 */
      customer_idm_list?: string[] | undefined
      /** 得意先グループCD */
      customer_group_cd?: string | null | undefined
      /** 出力種別 */
      billing_type_cd1: string
      /** 出力形式(紙) */
      is_printer: boolean
      /** 出力形式(PDF(FAX)) */
      is_pdf_fax: boolean
      /** 出力形式(PDF(楽楽)) */
      is_pdf_rakuraku: boolean
      /** OMR有・5枚以下 */
      is_omr_small: boolean
      /** OMR有・6枚以上 */
      is_omr_large: boolean
      /** OMR無 */
      is_omr_none: boolean
      /** 口座振替先様用備考 */
      transfer_note?: string | null | undefined
      /** 全得意先様用備考 */
      customer_note?: string | null | undefined
    }
  }
}
