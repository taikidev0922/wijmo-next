/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 入荷予定一覧データを取得します */
  get: {
    query?: {
      /** 商品ID */
      invent_id?: number | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      items: Types.ArrivalScheduledStock[]
      total: number
    }
  }

  /** 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ArrivalScheduledStockBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ArrivalScheduledStockBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
