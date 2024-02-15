/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** チーム一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** チーム名 */
      name?: string | undefined
      /** 部署CD */
      post_cd1?: string | undefined
      /** 拠点CD */
      business_location_cd1?: string | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.Team[]
      total: number
    }
  }

  /** チームを追加更新削除します。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      /** オブジェクトの配列。追加更新削除した結果が反映されます。 */
      items?: Types.TeamBulkTarget[] | undefined
    }

    reqBody: {
      /** 追加更新削除するオブジェクトの配列 */
      items?: Types.TeamBulkTarget[] | undefined
    } & Types.BulkRequest
  }
}
