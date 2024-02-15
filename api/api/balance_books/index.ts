/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** BalanceBook一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** INVNo. */
      invoice_no?: string | undefined
      /** Invoice発行日From */
      issuing_on_from?: string | undefined
      /** Invoice発行日To */
      issuing_on_to?: string | undefined
      /** 登録担当者IDM */
      user_idm?: string | undefined
      /** 登録担当者名 */
      user_name?: string | undefined
      /** BB種別区分 */
      bb_type_cd1?: string | undefined
      /** 処理区分 */
      balance_book_type_cd1?: string | undefined
      /** 請求区分 */
      balance_book_bill_type_cd1?: string | undefined
      /** 支払先IDM */
      vendor_idm?: string | undefined
      /** 支払先名 */
      vendor_name?: string | undefined
      /** 生産者IDM */
      maker_vendor_idm?: string | undefined
      /** 生産者名 */
      maker_vendor_name?: string | undefined
      /** 品番 */
      invent_idm?: string | undefined
      /** 商品名 */
      invent_name?: string | undefined
      /** 通貨ID */
      currency_cd1?: string | undefined
      /** 発生船積オーダーNo */
      shipping_order_no?: string | undefined
      /** 発生予約オーダーNo */
      shipping_reservation_no?: string | undefined
      /** 相殺先船積オーダーNo */
      offset_shipping_order_no?: string | undefined
      /** 相殺先予約オーダーNo */
      offset_shipping_reservation_no?: string | undefined
      /** BB内部備考(ヘッダ) */
      note?: string | undefined
      /** BB内部備考(明細) */
      detail_note?: string | undefined
      /** サインバック受領日が記録されているかどうか。trueなら記録されているものを取得。falseなら無視。 */
      is_receipt_sign_back?: boolean | undefined
      /** サインバック受領日が記録されているかどうか。trueなら記録されていないもの取得。falseなら無視。 */
      is_not_receipt_sign_back?: boolean | undefined
      /** 管理部受領日が記録されているかどうか。trueなら記録されているものを取得。falseなら無視。 */
      is_receipt_management?: boolean | undefined
      /** 管理部受領日が記録されているかどうか。trueなら記録されていないものを取得。falseなら無視。 */
      is_not_receipt_management?: boolean | undefined
      /** 未完了のみ */
      is_incomplete?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: {
        /** BalanceBookID */
        id?: number | null | undefined
        /** BB種別区分 */
        bb_type_cd1?: string | null | undefined
        /** BalanceBook日付 */
        balance_book_on?: string | null | undefined
        /** INVNo. */
        invoice_no?: string | null | undefined
        /** 登録担当者ID */
        user_id?: number | null | undefined
        /** 支払先ID */
        vendor_id?: number | null | undefined
        /** 通関申告有無フラグ */
        is_report_customs?: boolean | undefined
        /** 外貨請求フラグ */
        is_foreign_currency_billing?: boolean | undefined
        /** 内部備考 */
        note?: string | null | undefined
        /** 登録担当者名 */
        user_name?: string | null | undefined
        /** 請求区分CD */
        balance_book_bill_type_cd1?: string | null | undefined
        /** 処理区分CD */
        balance_book_type_cd1?: string | null | undefined
        /** 発生船積オーダーNo */
        shipping_order_display_no?: string | null | undefined
        /** 発生予約オーダーNo */
        shipping_reservation_display_no?: string | null | undefined
        /** 支払先IDM */
        pay_vendor_idm?: string | null | undefined
        /** 支払先名(略式/和文) */
        pay_vendor_name_jp_abbr?: string | null | undefined
        /** 生産者IDM */
        maker_vendor_idm?: string | null | undefined
        /** 生産者名(略式/和文) */
        maker_vendor_name_jp_abbr?: string | null | undefined
        /** 品番 */
        invent_idm?: string | null | undefined
        /** 商品名(正式/和文) */
        invent_name_jp?: string | null | undefined
        /** 商品名(略式/和文) */
        invent_name_abbr?: string | null | undefined
        /** BalanceBook明細ID */
        balance_book_detail_id?: number | null | undefined
        /** 年号 */
        vintage?: string | null | undefined
        /** 通貨CD */
        currency_cd1?: string | null | undefined
        /** 金額(外貨) */
        amount?: string | null | undefined
        /** Invoice発行日 */
        issuing_on?: string | null | undefined
        /** サインバック受領日 */
        receipt_sign_back_on?: string | null | undefined
        /** 管理部受領日 */
        receipt_management_on?: string | null | undefined
        /** 相殺先オーダーNo */
        offset_shipping_order_reservation_no?: string | null | undefined
        /** 補填先オーダーNo */
        compensation_shipping_order_display_no?: string | null | undefined
        /** 完了 */
        is_complete?: boolean | null | undefined
        /** 着金確認日 */
        check_payment_on?: string | null | undefined
      }[]
      total: number
    }
  }

  /** BalanceBookを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.BalanceBookBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.BalanceBookBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
