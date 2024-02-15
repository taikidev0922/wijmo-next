/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** シール一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** シールIDM */
      idm?: string | undefined
      /** シール区分 */
      sticker_type_cd1?: string | undefined
      /** レイアウト名 */
      layout_name?: string | undefined
      /** 函バーコード区分 */
      sticker_layout_mod_type_cd1?: string | undefined
      /** レイアウト名出力除外FLG */
      is_not_name_output?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Seal[]
      total: number
    }
  }

  /** シールを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.SealBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.SealBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
