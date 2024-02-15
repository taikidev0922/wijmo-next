/* eslint-disable */
export type Methods = {
  /** 月次締めもしくは解除を行います。 */
  post: {
    status: 200

    reqBody: {
      /** 月次締め処理する年月 */
      year_month: string
      /** 締め処理をする場合はtrue。解除処理の場合はfalse。 */
      close: boolean
      /** 売上に処理をするか。 */
      sales?: boolean | undefined
      /** 仕入に処理をするか。 */
      purchase?: boolean | undefined
      /** 在庫に処理をするか。 */
      stock?: boolean | undefined
      /** 入金に処理をするか。 */
      deposit?: boolean | undefined
      /** 支払に処理をするか。 */
      payment?: boolean | undefined
      /** 棚卸に処理をするか。 */
      inventory?: boolean | undefined
    }
  }
}
