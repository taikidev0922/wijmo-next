/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 在庫振替一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 在庫振替No */
      no?: string | undefined
      /** 在庫振替区分 */
      stock_change_type_cd1?: string | undefined
      /** 在庫振替依頼区分 */
      stock_change_request_type_cd1?: string | undefined
      /** 完成状態 */
      stock_change_completion_status_cd1?: string | undefined
      /** 依頼日From */
      requested_from?: string | undefined
      /** 依頼日To */
      requested_to?: string | undefined
      /** 依頼者Idm */
      requested_user_idm?: string | undefined
      /** 依頼者名 */
      requested_user_name?: string | undefined
      /** 担当部署CD */
      post_cd1?: string | undefined
      /** 振替完了日From */
      stock_changed_from?: string | undefined
      /** 振替完了日To */
      stock_changed_to?: string | undefined
      /** 振替者Idm */
      stock_changed_user_idm?: string | undefined
      /** 振替者名 */
      stock_changed_user_name?: string | undefined
      /** 作業完了希望日From */
      desired_completion_from?: string | undefined
      /** 作業完了希望日To */
      desired_completion_to?: string | undefined
      /** 営業担当者Idm */
      sales_user_idm?: string | undefined
      /** 営業担当者名 */
      sales_user_name?: string | undefined
      /** 作業完了希望 */
      complete_note?: string | undefined
      /** 予定・完成倉庫Idm */
      location_idm?: string | undefined
      /** 予定・完成倉庫名 */
      location_name?: string | undefined
      /** 実在庫あり */
      is_actual_stock?: boolean | undefined
      /** 得意先Idm */
      customer_idm?: string | undefined
      /** 得意先名 */
      customer_name_jp?: string | undefined
      /** 品番-無 */
      is_non_invent?: boolean | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 商品名 */
      name_denpatu?: string | undefined
      /** 容量 */
      volume?: number | undefined
      /** 希望小売価格From */
      mrp_from?: string | undefined
      /** 希望小売価格To */
      mrp_to?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: (Types.StockChange & {
        /** 荒木_実在庫 */
        araki_actual_count?: number | null | undefined
        /** 荒木不要_実在庫 */
        araki_bad_actual_count?: number | null | undefined
        /** 本社_実在庫 */
        osaka_actual_count?: number | null | undefined
        /** 本社不良_実在庫 */
        osaka_bad_actual_count?: number | null | undefined
      })[]
      total: number
    }
  }

  /** 在庫振替を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.StockChangeBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.StockChangeBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
