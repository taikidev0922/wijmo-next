/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 欠品VT変更案内を出力します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.ReportHistory[]

    reqBody: {
      /** 現物取置管理No/行Noと国内受注明細IDの配列 */
      items: {
        /** 得意先IDM */
        customer_idm: string
        /** 得意先名 */
        customer_name: string
        /** 品番 */
        invent_idm: string
        /** 商品名 */
        invent_name: string
        /** 年号 */
        vintage: string
        /** 容量 */
        volume: number
        /** 納価 */
        previous_bottle_unit_price?: string | null | undefined
        /** 希望小売価格 */
        previous_mrp?: string | null | undefined
        /** 取置数 */
        stock_bottle_total?: number | null | undefined
        /** 有効在庫数 */
        available_stock_count?: number | null | undefined
        /** 品切予想 */
        out_of_stock_forecast?: string | null | undefined
        /** 入荷予定日 */
        will_arrive_on?: string | null | undefined
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
