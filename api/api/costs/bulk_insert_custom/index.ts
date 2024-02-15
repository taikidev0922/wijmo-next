/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../@types'

export type Methods = {
  /** コスト通関データを取り込みます。 */
  post: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: ({
        /** ID */
        id?: number | null | undefined
        /** 船積オーダーID */
        shipping_order_id?: number | null | undefined

        shipping_order?: Types.ShippingOrder | undefined

        /** 作成者ID */
        operator_user_id?: number | null | undefined

        operator_user?: Types.User | undefined

        /** データ書出日 */
        output_on?: string | null | undefined
        /** 総重量 */
        total_weight?: string | null | undefined
        import_cost_details?: Types.ImportCostDetail[] | undefined
        import_cost_customs?: Types.ImportCostCustom[] | undefined
      })[] | undefined
    }

    reqFormat: FormData

    reqBody: {
      /** コスト通関データファイル。 */
      file?: (File | ReadStream) | undefined
    }
  }
}
