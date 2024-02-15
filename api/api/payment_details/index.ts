/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 国内支払支払金額内訳一覧を返します */
  get: {
    query?: Types.Embed & Types.With_deleted & {
      /** 支払実績ID */
      payment_result_id?: number | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      items: Types.PaymentDetail[]
      total: number
    }
  }

  /** 国内支払支払金額内訳を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.PaymentDetailBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.PaymentDetailBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
