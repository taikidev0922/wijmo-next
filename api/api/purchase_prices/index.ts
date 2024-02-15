/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 入荷原価一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 船積オーダーNo */
      display_no?: string | undefined
      /** 通関許可日From */
      customs_release_on_from?: string | undefined
      /** 通関許可日To */
      customs_release_on_to?: string | undefined
      /** 原価計算ステータス */
      cost_status_cd1?: string | undefined
      /** 原価反映日From */
      cost_updated_on_from?: string | undefined
      /** 原価反映日To */
      cost_updated_on_to?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: (Types.PurchasePrice)[]
      total: number
    }
  }

  /** 入荷原価を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.PurchasePriceBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.PurchasePriceBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
