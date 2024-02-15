/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 棚卸情報を取得します */
  get: {
    query?: Types.Embed | undefined
    status: 200
    /** OK */
    resBody: Types.InventoryResult
  }
}
