/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 函ラベル一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 函ラベルIDM */
      idm?: string | undefined
      /** 和文 */
      name_jp?: string | undefined
      /** 英文 */
      name_en?: string | undefined
      /** 仏文 */
      name_fr?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.LabelBox[]
      total: number
    }
  }

  /** 函ラベルを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.LabelBoxBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.LabelBoxBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
