/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 酒税報告書（得意先向け・税務署&酒販組合向け）を出力します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.BatchHistory[]

    reqBody: {
      /** 出力形式 */
      output_format: boolean
      /** 処理年月From */
      process_year_month_from: string
      /** 処理年月To */
      process_year_month_to?: string | undefined
      /** 得意先ID */
      customer_id?: number | undefined
      /** 得意先検索条件 */
      customer_search_condition?: number | undefined
      reports: {
        /** 帳票ID */
        report_id: number
        /** 出力形式 */
        output_type_cd1: string
      }[]
      /** 再印字区分 */
      reprint_type_cd1: string
      /** プリンターID。output_type_cd1=1(印刷)の時のみ有効です。 */
      printer_id?: number | null | undefined
      /** 出力結果を送信するか。output_type_cd1=1(印刷)の時は無効です。 */
      send?: boolean | null | undefined
    }
  }
}
