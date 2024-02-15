/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 船積オーダー搬入スケジュール一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 入港日From */
      eta_on_from?: string | undefined
      /** 入港日To */
      eta_on_to?: string | undefined
      /** 船積オーダーNo */
      display_no?: string | undefined
      /** 最終船名 */
      ship_name_last?: string | undefined
      /** B/L番号 */
      bl_no?: string | undefined
      /** コンテナ番号 */
      container_no?: string | undefined
      /** 倉庫搬入日From */
      carried_on_from?: string | undefined
      /** 倉庫搬入日To */
      carried_on_to?: string | undefined
      /** 倉庫搬入日未入力含む */
      is_include_unenterd_carried_on?: boolean | undefined
      /** 倉庫IDM */
      location_idm?: string | undefined
      /** 通関担当者IDM */
      customs_user_idm?: string | undefined
      /** 一括搬入日From */
      imported_on_from?: string | undefined
      /** 一括搬入日To */
      imported_on_to?: string | undefined
      /** バイヤーIDM */
      buyer_user_idm?: string | undefined
      /** オペレーターIDM */
      operator_user_idm?: string | undefined
      /** フォワーダーIDM */
      forwarder_vendor_idm?: string | undefined
      /** フリータイム超過分のみ */
      is_free_time_overage_only?: boolean | undefined
      /** 通関許可(Enum::CustomsReleaseType) */
      customs_release_type?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: (Types.ShippingOrder & {
        /** 表示用船積オーダーNo */
        display_no?: string | undefined
        /** コンテナ番号 */
        container_no?: string | undefined
        /** コンテナ仕様 */
        container_type_cd1?: string | undefined
        /** フォワーダー/船社 */
        forwarder_vendor_name_jp_abbr?: string | undefined
        /** 船社名 */
        ship_company_name?: string | undefined
        /** 入港地 */
        arrival_port_cd1?: string | undefined
        /** バイヤー名 */
        buyer_user_name?: string | undefined
        /** オペレーター名 */
        operator_user_name?: string | undefined
        /** 通関担当者名 */
        customs_user_name?: string | undefined
        /** 処理済フラグ */
        is_complete?: boolean | undefined
        /** FT内部備考 */
        free_time_note?: string | undefined
        /** 実ケース数合計 */
        schedule_total_local_case_count?: number | undefined
        /** 実バラ数合計 */
        schedule_total_local_bottle_count?: number | undefined
        /** アイテム数 */
        schedule_item_count?: number | undefined
        /** 最大通関許可日 */
        max_customs_release_on?: string | undefined
        /** 通関許可日未セット件数 */
        empty_customs_release_on_count?: number | undefined
      })[]
      total: number
    }
  }

  /** 搬入スケジュールを一括更新します。 */
  put: {
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ShippingOrderScheduleBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ShippingOrderScheduleBulkTarget[] | undefined
    }
  }
}
