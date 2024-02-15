/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 商品入荷履歴取得一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** IDM */
      idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Invent[]
      total: number
    }
  }
}
