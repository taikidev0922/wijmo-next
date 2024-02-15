/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 船積オーダーを取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。 */
  get: {
    query?: Types.Embed & Types.With_deleted & Types.Lock_key1 & Types.Lock_page_id | undefined
    status: 200

    /** OK */
    resBody: Types.ShippingOrder & Types.HasResults
  }
}
