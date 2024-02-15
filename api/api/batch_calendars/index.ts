/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** バッチカレンダー一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 開始日 */
      first_on?: string | undefined
      /** 最終日 */
      last_on?: string | undefined
      /** バッチカレンダー区分 */
      batch_calendar_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.BatchCalendar[]
      total: number
    }
  }

  /** バッチカレンダーを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.BatchCalendarBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.BatchCalendarBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
