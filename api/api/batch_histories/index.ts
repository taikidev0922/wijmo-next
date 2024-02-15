/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** バッチ履歴一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 終了日時が記録されているかどうか。trueなら記録されているものを取得。falseなら記録されていないものを取得。nullなら全て取得。 */
      ended?: boolean | undefined
      /** trueなら件数のみ取得。false, 未指定なら全て取得。 */
      only_count?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.BatchHistory[]
      total: number
    }
  }
}
