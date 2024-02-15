/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 予約オーダーを取得します */
  get: {
    query?: Types.Embed & Types.With_deleted | undefined
    status: 200
    /** OK */
    resBody: Types.ShippingReservation
  }
}
