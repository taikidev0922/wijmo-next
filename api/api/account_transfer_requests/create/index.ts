/* eslint-disable */
export type Methods = {
  /** 口座振替依頼データを作成します。 */
  post: {
    status: 200

    reqBody: {
      /** 回収予定日 */
      recover_on: string
      /** 振替日 */
      transfer_on?: string | undefined
      /** 再作成 */
      is_re_create?: boolean | undefined
    }
  }
}
