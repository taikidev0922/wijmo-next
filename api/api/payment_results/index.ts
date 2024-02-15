/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 国内支払予定・実績一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 締日区分CD */
      closing_day_type_cd1?: string | undefined
      /** 支払先IDM */
      vendor_idm?: string | undefined
      /** 支払先名 */
      vendor_name?: string | undefined
      /** 支払期日From */
      min_payment_on?: string | undefined
      /** 支払期日To */
      max_payment_on?: string | undefined
      /** 支払実行日From */
      min_paid_on?: string | undefined
      /** 支払実行日日To */
      max_paid_on?: string | undefined
      /** 支払実績備考 */
      note?: string | undefined
      /** 0:未指定/1:予約未確定/2:予定確定済/3:実績確定済 */
      fixed_status?: number | undefined
      /** 送金データが出力済みかどうか。trueなら出力済みのものを取得。falseなら未出力のものを取得。nullなら全て取得。 */
      is_outputted?: boolean | undefined
      /** 支払日区分 */
      payment_day_type_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.PaymentResult[]
      total: number
    }
  }

  /** 国内支払予定・実績を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.PaymentResultBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.PaymentResultBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
