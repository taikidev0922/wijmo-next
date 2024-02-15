/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 得意先を取得します。新たなロックを取得する前に、同一テーブルの同一ロックキー1に対する同一担当者によるロックは解除されます。 */
  get: {
    query?: Types.Embed & Types.With_deleted & Types.Lock_key1 & Types.Lock_page_id & {
      /** 得意先営業担当者、得意先与信管理について、trueなら最新のみ取得。false, 未指定なら全て取得。 */
      only_latest?: boolean | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: Types.Customer & Types.HasResults
  }
}
