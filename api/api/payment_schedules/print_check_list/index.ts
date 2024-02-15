/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 支払予定チェックリストを出力します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.ReportHistory[]

    reqBody: {
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
