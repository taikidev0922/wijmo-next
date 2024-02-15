/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 現物取置依頼書を出力します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.ReportHistory[]

    reqBody: {
      /** 現物取置管理No/行Noと国内受注明細IDの配列 */
      physical_stocks: {
        /** 現物取置管理No */
        physical_stock_no: string
        /** 現物取置管理行No */
        physical_stock_line_no: number
        /** 国内受注明細ID */
        sales_order_detail_id?: number | null | undefined
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
