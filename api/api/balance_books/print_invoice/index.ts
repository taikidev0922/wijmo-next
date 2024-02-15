/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Invoice帳票を出力します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.ReportHistory[]

    reqBody: {
      /** BalanceBookIDの配列 */
      ids: number[]
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
    }
  }
}
