/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 船積受注一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** インボイスNo */
      display_no?: string | undefined
      /** インボイス日付(From) */
      invoice_from?: string | undefined
      /** インボイス日付(To) */
      invoice_to?: string | undefined
      /** 受注日(From) */
      ordered_from?: string | undefined
      /** 受注日(To) */
      ordered_to?: string | undefined
      /** 担当者IDM */
      user_idm?: string | undefined
      /** 発注担当者名 */
      user_name?: string | undefined
      /** 得意先IDM */
      customer_idm?: string | undefined
      /** 得意先名 */
      customer_name?: string | undefined
      /** 船積受注状況 */
      export_shipping_order_status_cd1?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 商品名 */
      invent_name?: string | undefined
      /** 確定フラグ */
      is_confirmed?: boolean | undefined
      /** 売上日未入力のみ */
      only_unentered_sold_on?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.ExportOrder[]
      total: number
    }
  }

  /** 船積受注を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ExportOrderBulkTarget[] | undefined
    }

    reqBody: {
      /** 入金予定日 */
      will_deposit_on?: string | null | undefined
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ExportOrderBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
