/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 外貨購入一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 通貨 */
      currency_cd1?: string | undefined
      /** 取引区分 */
      foreign_currency_order_type_cd1?: string | undefined
      /** 計上日From */
      min_posted_on?: string | undefined
      /** 計上日To */
      max_posted_on?: string | undefined
      /** 購入・入金使用目的 */
      payment_foreign_currency_purpose_cd1?: string | undefined
      /** 購入・入金口座IDM */
      payment_bank_account_idm?: string | undefined
      /** 振替元使用目的 */
      src_foreign_currency_purpose_cd1?: string | undefined
      /** 振替元口座IDM */
      src_bank_account_idm?: string | undefined
      /** 振替先使用目的 */
      dest_foreign_currency_purpose_cd1?: string | undefined
      /** 振替先口座IDM */
      dest_bank_account_idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.ForeignCurrencyPurchase[]
      total: number
    }
  }

  /** 外貨購入を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ForeignCurrencyPurchaseTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ForeignCurrencyPurchaseTarget[] | undefined
    } & Types.BulkRequest
  }
}
