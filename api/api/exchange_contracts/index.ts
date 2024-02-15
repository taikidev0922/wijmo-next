/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 為替予約一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 通貨 */
      currency_cd1?: string | undefined
      /** 購入予定年月日From */
      min_will_purchase_on?: string | undefined
      /** 購入予定年月日To */
      max_will_purchase_on?: string | undefined
      /** 購入年月From */
      min_purchase_year_month?: string | undefined
      /** 購入年月To */
      max_purchase_year_month?: string | undefined
      /** 購入年月日From */
      min_purchase_on?: string | undefined
      /** 購入年月日To */
      max_purchase_on?: string | undefined
      /** 購入開始・終了年月日 */
      purchase_start_end_on?: string | undefined
      /** 購入区分 */
      foreign_currency_purchase_cd1?: string | undefined
      /** 購入銀行 */
      purchase_currency_cd1?: string | undefined
      /** 購入銀行口座IDM */
      purchase_bank_account_idm?: string | undefined
      /** 契約(予約)No */
      contract_no?: string | undefined
      /** KOレート */
      ko_rate?: number | undefined
      /** 消滅 */
      is_out_of_contract?: boolean | undefined
      /** 確定 */
      is_confirmed?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.ExchangeContract[]
      total: number
    }
  }

  /** 為替予約を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ExchangeContractBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ExchangeContractBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
