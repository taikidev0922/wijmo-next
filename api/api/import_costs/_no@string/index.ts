/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** コストを取得します */
  get: {
    query?: Types.Embed & Types.With_deleted | undefined
    status: 200

    /** OK */
    resBody: {
      item?: Types.ShippingOrder | undefined
      freights?: Types.ForwarderRecruit[] | undefined
      template?: Types.ForwarderCost[] | undefined
    }
  }
}
