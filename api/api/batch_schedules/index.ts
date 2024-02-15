/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** バッチスケジュール一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** スケジュール区分 */
      batch_schedule_type_cd1?: string | undefined
      /** バッチカレンダー区分 */
      batch_calendar_cd1?: string | undefined
      /** バッチパラメータIDM */
      batch_parameter_idm?: string | undefined
      /** バッチIDM */
      batch_idm?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.BatchSchedule[]
      total: number
    }
  }

  /** バッチスケジュールを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.BatchScheduleBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.BatchScheduleBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
