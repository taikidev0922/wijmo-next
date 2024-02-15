/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** 輸入購買単価を追加更新します。対象の商品のロックが取得されていなければ、失敗します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.Invent

    reqBody: {
      /** 改定日 */
      change_on: string
      /** 通貨 */
      currency_cd1: string
      /** 価格単位 */
      price_unit_cd1: string
      /** 現地単価 */
      local_unit_price: string
      /** 割引前単価 */
      pre_discount_unit_price: string
      /** 価格体系CD */
      price_system_cd1: string
    }
  }
}
