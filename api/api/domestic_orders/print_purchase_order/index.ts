/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 国内発注書を出力します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.BatchHistory[]

    reqBody: {
      /** 国内発注IDの配列 */
      domestic_orders: {
        /** 国内発注ID */
        id: number
      }[]
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
      /** 国内発注書発送方法 */
      purchase_send_type_cd1?: string | null | undefined
    }
  }
}
