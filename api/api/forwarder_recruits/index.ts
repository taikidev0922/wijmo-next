/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** フォワーダー採用一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** フォワーダー採用ID */
      id?: number | undefined
      /** 仕入先IDM */
      vendor_idm?: string | undefined
      /** 仕入先名 */
      vendor_name?: string | undefined
      /** 見積採用期間開始日 */
      start_on?: string | undefined
      /** 見積採用期間終了日 */
      end_on?: string | undefined
      /** 船積オーダー記号 */
      mark?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.ForwarderRecruit[]
      total: number
    }
  }

  /** フォワーダー採用を追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.ForwarderRecruitBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.ForwarderRecruitBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
