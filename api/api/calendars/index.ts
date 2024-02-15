/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** カレンダー一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 開始日 */
      first_on?: string | undefined
      /** 最終日 */
      last_on?: string | undefined
      /** 配送区分 */
      haisou_cd1?: string | undefined
      /** 売上日 */
      sales_on?: string | undefined
      /** 売上日(From) */
      sales_on_from?: string | undefined
      /** 払出不可かどうか。trueなら払出不可のものを取得。falseなら払出可のものを取得。nullなら全て取得。 */
      is_closed_for_pickup?: boolean | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Calendar[]
      total: number
    }
  }

  /** カレンダーを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.CalendarBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.CalendarBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
