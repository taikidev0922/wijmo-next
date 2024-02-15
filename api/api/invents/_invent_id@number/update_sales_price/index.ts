/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** 商品販売単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.Invent

    reqBody: {
      /** 改定日 */
      change_on: string
      /** バラ納価 */
      bottle_unit_price: string
      /** ケース納価 */
      case_unit_price: string
      /** 希望小売価格 */
      mrp?: string | null | undefined
      /** 参考価格 */
      reference_price?: string | null | undefined
      /** 価格設定時レート */
      rate?: string | null | undefined
      /** 価格設定時仕入単価 */
      setup_invent_price?: string | null | undefined
      /** 最終仕入単価 */
      purchase_unit_price?: string | null | undefined
    }
  }
}
