/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** TTMレート一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 変更日From */
      change_on_from?: string | undefined
      /** 変更日To */
      change_on_to?: string | undefined
      /** 通貨CD */
      currency_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.TtmRate[]
      total: number
    }
  }

  /** TTMレートを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.TtmRateBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.TtmRateBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
