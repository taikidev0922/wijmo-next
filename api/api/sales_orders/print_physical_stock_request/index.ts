/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 現物取置依頼書を出力します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.ReportHistory[]

    reqBody: {
      /** 現物取置管理No/行Noと受注Noの配列 */
      sales_orders: {
        /** 現物取置管理No */
        physical_stock_no: string
        /** 現物取置管理行No */
        physical_stock_line_no: number
        /** 国内受注No */
        sales_order_no: number
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
