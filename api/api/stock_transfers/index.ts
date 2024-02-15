/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 在庫移動一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 在庫移動No */
      no?: string | undefined
      /** 入庫方法 */
      entry_type_cd1?: string | undefined
      /** 商品ID */
      invent_id?: number | undefined
      /** 商品IDM */
      invent_idm?: string | undefined
      /** 商品名(伝票印字品名) */
      name_denpatu?: string | undefined
      /** 年号 */
      vintage?: string | undefined
      /** 容量 */
      volume?: number | undefined
      /** 出庫倉庫ID */
      exit_location_id?: number | undefined
      /** 出庫倉庫IDM */
      exit_location_idm?: string | undefined
      /** 出庫倉庫名 */
      exit_location_name?: string | undefined
      /** 入庫倉庫ID */
      entry_location_id?: number | undefined
      /** 入庫倉庫IDM */
      entry_location_idm?: string | undefined
      /** 入庫倉庫名 */
      entry_location_name?: string | undefined
      /** 移動日がこれ以上 */
      min_transferred_on?: string | undefined
      /** 移動日がこれ以下 */
      max_transferred_on?: string | undefined
      /** 移動状態 */
      transfer_status_cd1?: string | undefined
      /** 入庫予定日がこれ以上 */
      min_will_entry_on?: string | undefined
      /** 入庫予定日がこれ以下 */
      max_will_entry_on?: string | undefined
      /** 出庫希望日がこれ以上 */
      min_exit_request_on?: string | undefined
      /** 出庫希望日がこれ以下 */
      max_exit_request_on?: string | undefined
      /** 出荷指示連携予定日がこれ以上 */
      min_will_shipping_link_on?: string | undefined
      /** 出荷指示連携予定日がこれ以下 */
      max_will_shipping_link_on?: string | undefined
      /** 予定伝送No */
      batch_no?: string | undefined
      /** 出荷指示連携日がこれ以上 */
      min_shipping_link_on?: string | undefined
      /** 出荷指示連携日がこれ以下 */
      max_shipping_link_on?: string | undefined
      /** 実績伝送No */
      shipping_link_batch_no?: string | undefined
      /** 移動実績内部備考(ヘッダー) */
      note?: string | undefined
      /** 在庫移動内部備考(明細) */
      stock_transfer_detail_note?: string | undefined
      /** 登録者IDM */
      created_user_idm?: string | undefined
      /** 登録者名 */
      created_user_name?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: (Types.StockTransfer & {
        created_user?: Types.User | undefined
      })[]
      total: number
    }
  }

  /** 在庫移動を追加します。追加のみ可能です。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.StockTransferBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.StockTransferBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
