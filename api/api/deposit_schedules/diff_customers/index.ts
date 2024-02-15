/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** 入金予定が未作成の得意先一覧を取得します */
  get: {
    query: Types.With_deleted & {
      /** 入金予定日 */
      will_deposit_on: string
      /** 入金先IDM */
      deposit_customer_idm: string
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** 得意先ID */
        id?: number | undefined
        /** 得意先IDM */
        idm?: string | undefined
        /** 得意先名略称 */
        name_abbr?: string | undefined
      }[]
    }
  }
}
