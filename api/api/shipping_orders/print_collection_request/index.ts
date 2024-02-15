/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 集荷依頼書を出力します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.BatchHistory[]

    reqBody: {
      /** 船積オーダーIDの配列 */
      shipping_orders: {
        /** 船積オーダーID */
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
    }
  }
}
