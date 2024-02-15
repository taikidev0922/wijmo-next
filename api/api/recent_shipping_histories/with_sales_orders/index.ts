/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 直近出荷履歴・国内受注一覧を返します */
  get: {
    query: Types.Limit & Types.With_deleted & Types.Embed & {
      /** 得意先IDM */
      customer_idm?: string | undefined
      /** 得意先名 */
      customer_name?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 商品名 */
      invent_name?: string | undefined
      /** 得意先グループID */
      customer_group_id?: string | undefined
      /** 得意先グループ名 */
      customer_group_name?: string | undefined
      /** 売上日(From) */
      sold_on_from?: string | undefined
      /** 売上日(To) */
      sold_on_to?: string | undefined
      /** 非表示を含むか */
      is_shipping_history_hidden?: boolean | undefined
      /** 備考 */
      memo?: string | undefined
      /** 見積を含むか */
      with_estimates?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.RecentShippingHistoryWithSalesOrder[]
      total: number
    }
  }

  /** 直近出荷履歴・国内受注を追加更新削除します。 */
  put: {
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.RecentShippingHistoryWithSalesOrderBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.RecentShippingHistoryWithSalesOrderBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
