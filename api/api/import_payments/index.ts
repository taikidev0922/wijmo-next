/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 輸入支払予定・実績入力一覧 */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 支払対象区分 */
      payment_target_cd1?: string | undefined
      /** INV_No. */
      invoice_no?: string | undefined
      /** 船積オーダーNo */
      shipping_order_display_no?: string | undefined
      /** 予約オーダーNo */
      shipping_reservation_display_no?: string | undefined
      /** 支払先IDM */
      vendor_idm?: string | undefined
      /** 通貨CD */
      currency_cd1?: string | undefined
      /** 原産国IDM */
      country_of_origin_idm?: string | undefined
      /** 支払期日From */
      payment_on_from?: string | undefined
      /** 支払期日To */
      payment_on_to?: string | undefined
      /** 支払実行日From */
      paid_on_from?: string | undefined
      /** 支払実行日To */
      paid_on_to?: string | undefined
      /** 入港日From */
      eta_on_from?: string | undefined
      /** 入港日To */
      eta_on_to?: string | undefined
      /** 支払予定確定 (左が１右が２) */
      payment_schedule_confirm?: string | undefined
      /** 支払実績確定 (左が１右が２) */
      payment_result_confirm?: string | undefined
      /** 送金データ出力 (左が１右が２) */
      remittance_output?: string | undefined
      /** 未確定含む */
      is_including_pending?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** インボイスNo */
        invoice_no?: string | null | undefined
        /** 管理者受領日 */
        receipt_management_on?: string | null | undefined
        /** 支払対象区分 */
        payment_target_cd1?: string | null | undefined
        /** 輸入・国内区分 */
        import_domestic_cd1?: string | null | undefined
        /** 入港日 */
        eta_on?: string | null | undefined
        /** 支払区分 */
        payment_type_cd1?: string | null | undefined
        /** 表示用予約オーダーNo */
        shipping_reservation_no?: string | null | undefined
        /** 表示用船積オーダーNo */
        shipping_order_display_no?: string | null | undefined
        /** 船積オーダーNo */
        shipping_order_no?: string | null | undefined
        /** 支払先ID */
        vendor_id?: number | null | undefined
        /** 支払条件ID */
        payment_condition_id?: number | null | undefined
        /** 通貨CD */
        currency_cd1?: string | null | undefined
        /** 支払期日 */
        payment_on?: string | null | undefined
        /** 支払実績ID */
        payment_result_id?: number | null | undefined
        /** 支払予定金額 */
        payment_amount?: string | null | undefined
        /** 外貨使用目的区分 */
        foreign_currency_purpose_cd1?: string | null | undefined
        /** 期日確定区分 */
        fixed_payment_date_cd1?: string | null | undefined
        /** 関連BalanceBookID配列(文字列) */
        balance_book_ids?: string | null | undefined
        /** 相殺金額 */
        offset?: string | null | undefined
        /** 支払先IDM */
        vendor_idm?: string | null | undefined
        /** 支払先名(和文/略称) */
        vendor_name_jp_abbr?: string | null | undefined
        /** 関連支払予定ID配列(文字列) */
        payment_schedule_ids?: string | null | undefined
        /** 支払実績トランの支払実績ID */
        payment_result_payment_result_id?: number | null | undefined
        /** 支払実行日 */
        paid_on?: string | null | undefined
        /** 支払担当者ID */
        user_id?: number | null | undefined
        /** 支払実績トランの支払条件ID */
        payment_result_payment_condition_id?: number | null | undefined
        /** 支払実績トランの外貨使用目的区分 */
        payment_result_foreign_currency_purpose_cd1?: string | null | undefined
        /** 銀行口座ID */
        bank_account_id?: number | null | undefined
        /** 支払予定金額(円貨) */
        payment_amount_jpy?: string | null | undefined
        /** 相殺金額(円貨) */
        offset_jpy?: string | null | undefined
        /** 支払金額(外貨) */
        paid_amount?: string | null | undefined
        /** 支払金額(円貨) */
        paid_amount_jpy?: string | null | undefined
        /** 支払レート */
        payment_rate?: string | null | undefined
        /** 原計レート */
        cost_rate?: string | null | undefined
        /** 仕訳摘要 */
        journal_note?: string | null | undefined
        /** 内部備考 */
        note?: string | null | undefined
        /** 銀行送金備考 */
        cash_transfer_note?: string | null | undefined
        /** 予定確定日 */
        fixed_schedule_on?: string | null | undefined
        /** 実績確定日 */
        fixed_result_on?: string | null | undefined
        /** 送金データ出力日 */
        output_on?: string | null | undefined
        /** 支払実績トランの更新カウンタ */
        payment_result_update_count?: number | null | undefined
        /** 銀行口座の外貨残高管理除外フラグ */
        is_out_of_balance?: boolean | null | undefined
        /** 原産国ID */
        country_of_origin_id?: number | null | undefined
        payment_offset_details?: {
          /** 支払相殺内訳ID */
          id?: number | null | undefined
          /** 支払実績ID */
          payment_result_id?: number | null | undefined
          /** BalanceBook相殺ID */
          balance_book_offset_id?: number | null | undefined
          /** 相殺元レート */
          offset_rate?: string | null | undefined
          /** 相殺金額(外貨) */
          offset?: string | null | undefined
          /** 相殺金額(円貨) */
          offset_jpy?: string | null | undefined
          /** 負担部門ID */
          team_id?: number | null | undefined
          /** 勘定科目ID */
          account_title_id?: number | null | undefined
          /** 補助科目ID */
          sub_account_title_id?: number | null | undefined
          /** 仕訳明細摘要 */
          journal_note?: string | null | undefined
          /** 更新カウンタ */
          update_count?: number | null | undefined
          /** インボイスNo */
          invoice_no?: string | null | undefined
          /** 支払確定済フラグ */
          is_fixed_result_on?: boolean | undefined
          /** サインバック受領フラグ */
          is_sign_back_on?: boolean | undefined
          /** 管理者受領フラグ */
          is_receipt?: boolean | undefined
          /** 相殺フラグ */
          is_offset?: boolean | undefined
          /** 相殺読み取り専用フラグ */
          offset_readonly?: boolean | undefined
        }[] | undefined
      }[]
      balance_books: {
        /** インボイスNo */
        invoice_no?: string | null | undefined
        /** BB種別区分 */
        bb_type_cd1?: string | null | undefined
        /** 請求区分 */
        balance_book_bill_type_cd1?: string | null | undefined
        /** 相殺可能額 */
        offset_amount?: string | null | undefined
        /** 管理者受領フラグ */
        is_receipt?: boolean | null | undefined
        /** 相殺で使用された支払実績ID配列(文字列) */
        relation_ids?: string | null | undefined
      }[]
      total: number
    }
  }

  /** 支払実績を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ImportPaymentBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ImportPaymentBulkTarget[] | undefined

      /** 操作種別 */
      payment_operation_type?: Types.PaymentOperationType | null | undefined
    } & Types.BulkRequest
  }
}
