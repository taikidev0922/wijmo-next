/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** プリンター一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted
    status: 200

    /** OK */
    resBody: {
      items: Types.Printer[]
      total: number
    }
  }
}
