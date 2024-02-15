/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** 船積発注明細一覧(前渡一覧)を返します */
  get: {
    query: Types.Limit & Types.With_deleted & {
      /** 月次締年月 */
      closed_on?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 仕入計上日 */
        record_on?: string | null | undefined
        /** 船積オーダーNo */
        no?: string | undefined
        /** 表示用船積オーダーNo */
        display_no?: string | undefined
        /** 船積数(ケース) */
        case_count?: number | undefined
        /** 船積数(バラ) */
        bottle_count?: number | undefined
        /** 残数(ケース) */
        remaining_case_count?: number | null | undefined
        /** 残数(バラ) */
        remaining_bottle_count?: number | null | undefined
        /** 船積オーダー金額 */
        order_purchase_amount?: string | null | undefined
        /** 使用金額(外貨) */
        purchase_amount?: string | null | undefined
        /** 使用金額(JPY) */
        purchase_amount_jpy?: string | null | undefined
        /** 残金額(外貨) */
        balance?: string | null | undefined
        /** 残金額(JPY) */
        balance_jpy?: string | null | undefined
        /** データ種別(0:船積、1:BB) */
        data_type?: number | null | undefined
      }[]
    }
  }
}
