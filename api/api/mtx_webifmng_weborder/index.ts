/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** WEB受注連携データ管理一覧を返します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted & {
      /** 倉庫IDM */
      mtx_inventlocationid?: string | undefined
      /** 取込ステータス */
      mtx_impstatus?: number | undefined
    }

    status: 200

    /** OK */
    resBody: {
      items: Types.MtxWebifmngWeborder[]
      total: number
    }
  }
}
