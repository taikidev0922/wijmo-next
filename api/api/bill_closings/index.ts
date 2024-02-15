/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 請求締一覧を返します */
  get: {
    query: Types.Limit & {
      /** 請求締年月 */
      closed_on_year_month: string
      /** 締日 */
      closing_day_cd1: string
      /** ステータス */
      billing_status_cd1?: string | undefined
      /** 入金先ID */
      deposit_customer_idm?: string | undefined
      /** 入金先名 */
      deposit_customer_name?: string | undefined
      /** 得意先グループCD */
      customer_group_cd1?: string | undefined
      /** 得意先グループ名 */
      customer_group_name?: string | undefined
      /** 得意先ID */
      customer_idm?: string | undefined
      /** 得意先名 */
      customer_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.BillClosing[]
      total: number
    }
  }

  /** 請求締一覧を一括処理します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.BillClosingBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.BillClosingBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
