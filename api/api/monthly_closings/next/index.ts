/* eslint-disable */
export type Methods = {
  /** 月次締めすべき年月を取得します。 */
  get: {
    status: 200

    /** OK */
    resBody: {
      /** 月次締め処理すべき年月 */
      year_month: string
      /** 売上が締め処理済みか */
      sales_closed: boolean
      /** 仕入が締め処理済みか */
      purchase_closed: boolean
      /** 在庫が締め処理済みか */
      stock_closed: boolean
      /** 入金が締め処理済みか */
      deposit_closed: boolean
      /** 支払が締め処理済みか */
      payment_closed: boolean
      /** 棚卸が締め処理済みか */
      inventory_closed: boolean
    }
  }
}
