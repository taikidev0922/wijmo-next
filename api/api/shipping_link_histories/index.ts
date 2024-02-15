/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 出荷指示データ連係履歴一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 伝送年月日 */
      executed_on?: string | undefined
      /** 倉庫ID */
      location_id?: number | undefined
      /** 倉庫IDM */
      location_idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.ShippingLinkHistory[]
      total: number
    }
  }
}
