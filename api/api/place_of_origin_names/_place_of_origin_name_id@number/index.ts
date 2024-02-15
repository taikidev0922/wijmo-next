/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 原産地呼称を取得します */
  get: {
    query?: Types.Embed & Types.With_deleted | undefined
    status: 200
    /** OK */
    resBody: Types.PlaceOfOriginName
  }
}
