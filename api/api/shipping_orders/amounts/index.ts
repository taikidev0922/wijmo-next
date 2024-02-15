/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 商品代金一覧を返します */
  get: {
    query: Types.Limit & Types.With_deleted & {
      /** 締年月 */
      closed_on?: string | undefined
      /** 仕入済かどうか。trueなら仕入済のものを取得。falseなら未仕入のものを取得。nullなら全て取得。 */
      is_purchased?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 船積オーダーNo */
        no?: string | undefined
        /** 表示用船積オーダーNo */
        display_no?: string | undefined
        /** 許可記号 */
        mark?: string | undefined
        /** 支払先ID */
        vendor_id?: number | null | undefined
        /** 支払先IDM */
        vendor_idm?: string | null | undefined
        /** 支払先名 */
        vendor_name?: string | null | undefined
        /** 支払条件 */
        payment_condition_name?: string | null | undefined
        /** 通貨CD */
        currency_cd1?: string | null | undefined
        /** 支払金額(外貨) */
        paid_amount?: string | null | undefined
        /** 支払金額(JPY) */
        paid_amount_jpy?: string | null | undefined
        /** 原計レート */
        cost_rate?: string | null | undefined
        /** 支払期日 */
        payment_on?: string | null | undefined
        /** 最終仕入日 */
        latest_purchased_on?: string | null | undefined
        /** 仕入済金額 */
        purchase_amount?: string | null | undefined
        /** 仕入済金額(JPY) */
        purchase_amount_jpy?: string | null | undefined
        /** 指定月仕入 */
        specified_month_purchase_amount?: string | null | undefined
        /** 指定月仕入(JPY) */
        specified_month_purchase_amount_jpy?: string | null | undefined
        /** 残額 */
        residue_purchase_amount?: string | null | undefined
        /** 残額(JPY) */
        residue_purchase_amount_jpy?: string | null | undefined
        /** BB処理金額 */
        balance_book_completion_amount?: string | null | undefined
      }[]
      total: number
    }
  }
}
