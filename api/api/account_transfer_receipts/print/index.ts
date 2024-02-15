/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 口座振替不能一覧データを出力します */
  post: {
    query?: Types.Embed | undefined
    status: 200

    reqBody: {
      /** 得意先IDM */
      ids?: number[] | undefined
      /** 口座振替完了件数 */
      transfer_successed_number: number
      /** 口座振替完了金額 */
      transfer_successed_amount: number
      /** 口座振替不能件数 */
      transfer_failed_number: number
      /** 口座振替不能金額 */
      transfer_failed_amount: number
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
