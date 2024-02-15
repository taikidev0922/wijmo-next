/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 帳票一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 帳票IDM */
      idm?: string | undefined
      /** 帳票名 */
      name?: string | undefined
      /** Excel出力可能かどうか。trueならExcel出力可のものを取得。falseならExcel出力不可のものを取得。nullなら全て取得。 */
      excel_enabled?: boolean | undefined
      /** PDF出力可能かどうか。trueならPDF出力可のものを取得。falseならPDF出力不可のものを取得。nullなら全て取得。 */
      pdf_enabled?: boolean | undefined
      /** 印刷可能かどうか。trueなら印刷可のものを取得。falseなら印刷不可のものを取得。nullなら全て取得。 */
      print_enabled?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Report[]
      total: number
    }
  }

  /** 帳票を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ReportBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ReportBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
