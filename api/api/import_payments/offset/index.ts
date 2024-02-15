/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 輸入支払予定・実績入力一覧 */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** INV_No. */
      invoice_no?: string | undefined
      /** 支払対象区分 */
      payment_target_cd1?: string | undefined
      /** 管理部受領日 */
      receipt_management_on?: string | undefined
      /** 支払先ID */
      vendor_id?: number | undefined
      /** 支払条件ID */
      payment_condition_id?: number | undefined
      /** 通貨 */
      currency_cd1?: string | undefined
      /** 支払期日 */
      payment_on?: string | undefined
      /** 支払実績ID */
      payment_result_id?: number | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.BalanceBookOffset[]
      balance_books: {
        /** インボイスNo */
        invoice_no?: string | null | undefined
        /** BB種別区分 */
        bb_type_cd1?: string | null | undefined
        /** 請求区分 */
        balance_book_bill_type_cd1?: string | null | undefined
        /** 相殺可能額 */
        offset_amount?: string | null | undefined
        /** 管理者受領フラグ */
        is_receipt?: boolean | null | undefined
        /** 相殺で使用された支払実績ID配列(文字列) */
        relation_ids?: string | null | undefined
      }[]
    }
  }
}
