/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** WEB受注データを取り込ます。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.BatchHistory

    reqBody: {
      /** 取込データ */
      vino_data_type_cd1: string
      /** 取込日 */
      import_on: string
      /** 取込時間 */
      vino_tori_cd1: string
      /** 倉庫 */
      web_invent_location_group_cd1: string
      /** 制限時間(分) */
      limited_minutes?: number | null | undefined
    }
  }
}
