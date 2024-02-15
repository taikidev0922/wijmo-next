/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 代引案内を出力します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.BatchHistory[]

    reqBody: {
      /** 国内受注明細IDの配列 */
      ids: number[]
      reports: {
        /** 帳票ID */
        report_id: number
      }[]
      /** 住所印字区分 */
      print_address_type_cd1: string
      /** 再印字区分 */
      reprint_type_cd1: string
      /** 警告を無視するかどうか */
      forced?: boolean | undefined
    }
  }
}
