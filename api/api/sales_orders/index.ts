/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 国内受注一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 受注No */
      no?: string | undefined
      /** 受注Noがこれ以上 */
      min_no?: string | undefined
      /** 受注Noがこれ以下 */
      max_no?: string | undefined
      /** 除外する登録区分。カンマ区切りで複数指定できます。 */
      excluded_sales_order_type_cd1?: string | undefined
      /** 売上日がこれ以上 */
      min_sold_on?: string | undefined
      /** 売上日がこれ以下 */
      max_sold_on?: string | undefined
      /** 入力得意先ID */
      customer_id?: number | undefined
      /** 入力得意先IDM */
      customer_idm?: string | undefined
      /** 入力得意先名 */
      customer_name?: string | undefined
      /** 入力得意先ID/入力得意先IDM/入力得意先名が、国内受注の入力得意先の親の得意先に一致する場合も検索結果に含める */
      with_children?: boolean | undefined
      /** 入力得意先納品データ送信区分 */
      customer_send_data_type_cd1?: string | undefined
      /** 入力得意先地方IDM */
      customer_wine_area_idm?: string | undefined
      /** 入力得意先地方IDMがこれ以上 */
      min_customer_wine_area_idm?: string | undefined
      /** 入力得意先地方IDMがこれ以下 */
      max_customer_wine_area_idm?: string | undefined
      /** 入力得意先地区IDM */
      customer_area_idm?: string | undefined
      /** 入力得意先グループCD */
      customer_group_cd1?: string | undefined
      /** 入力得意先グループ名 */
      customer_group_name?: string | undefined
      /** 得意先最新担当者ID */
      latest_customer_sales_user_id?: number | undefined
      /** 得意先最新担当者IDM */
      latest_customer_sales_user_idm?: string | undefined
      /** 得意先最新担当者名 */
      latest_customer_sales_user_name?: string | undefined
      /** 得意先IDM */
      parent_idm?: string | undefined
      /** 担当者ID */
      user_id?: number | undefined
      /** 担当者IDM */
      user_idm?: string | undefined
      /** 担当者名 */
      user_name?: string | undefined
      /** 担当者-チームIDM */
      team_department_idm?: string | undefined
      /** 更新者ID */
      updated_by?: number | undefined
      /** 倉庫ID */
      location_id?: number | undefined
      /** 倉庫IDM */
      location_idm?: string | undefined
      /** 倉庫名 */
      location_name?: string | undefined
      /** 前入力担当者ID */
      operator_user_id?: number | undefined
      /** 前入力担当者IDM */
      operator_user_idm?: string | undefined
      /** 前入力担当者名 */
      operator_user_name?: string | undefined
      /** 負担部門ID */
      team_id?: number | undefined
      /** 負担部門IDM */
      team_idm?: string | undefined
      /** 負担部門名 */
      team_name?: string | undefined
      /** 部署IDM */
      department_idm?: string | undefined
      /** ピッキング分類CD */
      picking_cd1?: string | undefined
      /** 業態CD */
      business_category_cd1?: string | undefined
      /** 受注状況CD */
      sales_order_status_cd1?: string | undefined
      /** 伝送区分CD */
      shipping_transfer_cd1?: string | undefined
      /** 伝送Noがこれ以上 */
      min_batch_no?: string | undefined
      /** 伝送Noがこれ以下 */
      max_batch_no?: string | undefined
      /** 着日がこれ以上 */
      min_arrival_request_on?: string | undefined
      /** 着日がこれ以下 */
      max_arrival_request_on?: string | undefined
      /** 更新日時と日付が一致 */
      updated_date?: string | undefined
      /** 更新日時がこれ以上 */
      min_updated_at?: string | undefined
      /** 更新日時がこれ以下 */
      max_updated_at?: string | undefined
      /** 指定リスト要 */
      is_order_sheet_required?: boolean | undefined
      /** 返信用封筒要 */
      is_return_envelope_required?: boolean | undefined
      /** 梱包ラベルCD */
      packing_label_cd1?: string | undefined
      /** 伝票郵送 */
      is_denpyo_post_required?: boolean | undefined
      /** 配送区分CD */
      haisou_cd1?: string | undefined
      /** 伝票種類CD */
      delivery_slip_cd1?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 単品バーコード */
      barcode?: string | undefined
      /** 商品名(伝票印字品名) */
      name_denpatu?: string | undefined
      /** 年号 */
      vintage?: string | undefined
      /** 取引区分 */
      sales_transaction_type_cd1?: string | undefined
      /** 明細備考 */
      external_note?: string | undefined
      /** 仕入先ID */
      vendor_id?: number | undefined
      /** 仕入先IDM */
      vendor_idm?: string | undefined
      /** 仕入先名(略称/和文) */
      vendor_name_jp_abbr?: string | undefined
      /** 生産者IDM */
      maker_vendor_idm?: string | undefined
      /** 生産者名(略称/和文) */
      maker_vendor_name_jp_abbr?: string | undefined
      /** 原産国IDM */
      country_of_origin_idm?: string | undefined
      /** 村IDM */
      village_idm?: string | undefined
      /** 商品名(別年号用)がこのIDMの商品と同じ */
      name_yearly_equals_to_idm?: string | undefined
      /** 戦略分類 */
      strategy_type_cd1?: string | undefined
      /** 得意先品番 */
      customer_item_cd?: string | undefined
      /** 相手先No */
      customer_order_no?: string | undefined
      /** 取置No */
      sales_stock_no?: string | undefined
      /** 取置Noがこれ以上 */
      min_sales_stock_no?: string | undefined
      /** 取置Noがこれ以下 */
      max_sales_stock_no?: string | undefined
      /** 現物取置管理No */
      physical_stock_no?: string | undefined
      /** 取置明細行No */
      sales_stock_line_no?: string | undefined
      /** キャンペーンID */
      mtx_campaignitemid?: string | undefined
      /** 全ての国内受注の、同一の得意先と商品に対して、売上日が最新であり受注Noが最大の国内受注明細のみ取得 */
      only_latest_sold_on?: boolean | undefined
      /** 同一の国内受注内の、同一の商品に対して、受注単価が最大の国内受注明細のみ取得 */
      only_highest_order_unit_price?: boolean | undefined
      /** 受注伝票検索単位 */
      search_sales_unit_cd1?: string | undefined
      /** 条件に一致する国内受注のうち、現在時刻以前で最新の国内受注のみ取得 */
      only_latest?: boolean | undefined
      /** shipping_files を応答に含めるかどうか。 */
      file_properties?: boolean | undefined
      /** stock, will_arrive_on, arrival_count, arrival_schedule_note, arrival_purchase_note, latest_order_unit_price, latest_vintage, latest_shipped_on を応答に含めるかどうか。 */
      extra_properties?: boolean | undefined
      /** 与信管理区分 */
      yoshin_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.SalesOrder[]
      total: number
    }
  }

  /** 国内受注を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.SalesOrderBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.SalesOrderBulkTarget[] | undefined
      /** 国内受注明細が全て削除されたときに、国内受注を削除するかどうか */
      delete_empty_headers?: boolean | undefined
      /** 得意先マスタの次回調整金額をクリアするかどうか */
      clear_customer_next_adjustment?: boolean | undefined
    } & Types.BulkRequest
  }
}
