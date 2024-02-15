/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 検索一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 検索IDM */
      idm?: string | undefined
      /** 検索名 */
      name?: string | undefined
      /** 検索文 */
      content?: string | undefined
      /** 検索条件。（明細の絞込用）trueなら検索条件フラグ=trueのものを取得。falseなら検索条件フラグ=falseのものを取得。nullなら全て取得。 */
      is_cond?: boolean | undefined
      /** 明細備考（明細の絞込用） */
      detail_note?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Search[]
      total: number
    }
  }

  /** 検索を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.SearchBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.SearchBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
