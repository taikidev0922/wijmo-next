/* eslint-disable */
export type Methods = {
  /** 条件を指定してロックを解除します。 */
  post: {
    status: 200

    reqBody: {
      /** 解除するロックのテーブル名。customers, invents, vendors, shipping_orders のいずれか。nullの時は担当者が取得したロックの全て。 */
      table_name?: string | null | undefined
      /** 解除するロックのロックキー1。nullの時は担当者が取得したロックの全て。なお、経緯によりlocksテーブルの該当するカラム上はkey2です。 */
      lock_key1?: string | null | undefined
    }
  }
}
