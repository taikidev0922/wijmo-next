/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。 */
  post: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      items?: {
        sagawa_delivery_detail?: (Types.SagawaDeliveryDetail)[] | undefined
        yamato_delivery_detail?: (Types.YamatoDeliveryDetail)[] | undefined
      } | undefined
    }

    reqBody: {
      items?: Types.CashOnDeliveryDepositTarget | undefined
    } & Types.BulkRequest
  }
}
