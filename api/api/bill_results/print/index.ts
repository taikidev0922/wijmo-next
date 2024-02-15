/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 売掛金残高証明書を出力します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.ReportHistory[]

    reqBody: {
      /** 請求実績IDの配列 */
      bill_results: {
        /** 請求実績ID */
        bill_result_id: number
      }[]
      reports: {
        /** 帳票ID */
        report_id: number
        /** 出力形式 */
        output_type_cd1: string
      }[]
      /** プリンターID */
      printer_id?: number | null | undefined
    }
  }
}
