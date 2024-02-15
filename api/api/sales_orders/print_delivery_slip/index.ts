/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 納品書・商品明細書を出力します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.BatchHistory[]

    reqBody: {
      /** 国内受注IDの配列 */
      sales_orders: {
        /** 国内受注ID */
        sales_order_id: number
      }[]
      reports: {
        /** 帳票ID */
        report_id: number
        /** 出力形式 */
        output_type_cd1: string
        /** trueなら商品明細書、そうでないときは納品書 */
        is_item_details?: boolean | undefined
      }[]
      /** プレビューであるか。 */
      preview?: boolean | null | undefined
      /** 住所印字区分 */
      print_address_type_cd1: string
      /** 再印字区分 */
      reprint_type_cd1: string
      /** プリンターID。output_type_cd1=1(印刷)の時のみ有効です。 */
      printer_id?: number | null | undefined
      /** 出力結果を送信するか。output_type_cd1=1(印刷)の時は無効です。 */
      send?: boolean | null | undefined
    }
  }
}
