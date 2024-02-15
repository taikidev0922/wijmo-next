/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** フレイト名称一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 名称 */
      name?: string | undefined
      /** コンテナ記号 */
      container?: string | undefined
      /** ドライ */
      dry?: string | undefined
      /** 改定年月 */
      change_on_year_month?: string | undefined
      /** 内部備考 */
      note?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.FreightName[]
      total: number
    }
  }

  /** フレイト名称を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.FreightNameBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.FreightNameBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
