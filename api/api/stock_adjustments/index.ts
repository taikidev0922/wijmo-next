/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 在庫調整一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 在庫調整ID */
      id?: number | undefined
      /** 在庫調整区分 */
      stock_adjustment_type_cd1?: string | undefined
      /** 在庫調整日From */
      adjusted_from?: string | undefined
      /** 在庫調整日To */
      adjusted_to?: string | undefined
      /** 調整理由 */
      reason?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 商品名(伝票印字品名) */
      name_denpatu?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.StockAdjustment[]
      total: number
    }
  }

  /** 在庫調整を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.StockAdjustmentBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.StockAdjustmentBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
