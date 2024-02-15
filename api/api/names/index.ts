/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 名称一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 名称区分CD1 */
      name_type_cd1?: string | undefined
      /** 名称 */
      name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Name[]
      total: number
    }
  }
}
