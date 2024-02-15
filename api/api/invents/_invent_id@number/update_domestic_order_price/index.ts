/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** 国内発注単価単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.Invent

    reqBody: {
      /** 改定日 */
      change_on: string
      /** バラ単価 */
      bottle_unit_price: string
      /** ケース単価 */
      case_unit_price?: string | null | undefined
      /** 価格単位CD */
      price_unit_cd1: string
    }
  }
}
