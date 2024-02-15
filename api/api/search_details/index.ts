/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 検索明細一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 検索ID */
      search_id: number
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.SearchDetail[]
      total: number
    }
  }
}
