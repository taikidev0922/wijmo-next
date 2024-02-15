/* eslint-disable */
export type Methods = {
  /** システム状態を取得します。 */
  get: {
    status: 200

    /** OK */
    resBody: {
      /** システム名 */
      name?: string | undefined
      /** バージョン */
      version?: string | undefined
      /** メンテナンスモードかどうか */
      maintenance?: boolean | undefined
    }
  }
}
