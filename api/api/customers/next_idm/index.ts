/* eslint-disable */
export type Methods = {
  /** 空いている得意先IDMを取得します。 */
  get: {
    query?: {
      /** 空いている子IDMを探す基準となる親IDM。空いている親IDMを取得するときは未指定。 */
      parent_idm?: string | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      /** 空きIDM */
      idm?: string | undefined
      /** 親得意先与信管理。親IDMが指定された場合に、親得意先に紐づく与信管理が取得されます。 */
      parent_customer_credits?: (Types.CustomerCredit)[] | undefined
    }
  }
}
