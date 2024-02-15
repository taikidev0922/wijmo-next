/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** WEB受注データを取り込ます。 */
  post: {
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.WebSalesOrderBulkTarget[] | undefined
      start_order_no?: string | null | undefined
      end_order_no?: string | null | undefined
      /** 開始日時 */
      started_at?: string | null | undefined
      /** 終了日時 */
      finished_at?: string | null | undefined
      /** 読込件数 */
      read_count?: number | null | undefined
      /** 読込件数 */
      error_count?: number | null | undefined
    }

    reqBody: {
      /** 取込データ */
      vino_data_type_cd1: string
      /** 取込日 */
      import_on: string
      /** 取込時間 */
      vino_tori_cd1: string
      /** 倉庫 */
      web_invent_location_group_cd1: string
      /** 制限時間(分) */
      limited_minutes?: number | null | undefined
    }
  }
}
