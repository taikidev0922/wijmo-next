/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../@types'

export type Methods = {
  /** 振込データ受信一覧データを取得します */
  get: {
    query: Types.Embed & Types.Limit & Types.With_deleted
    status: 200

    /** OK */
    resBody: {
      items: {
        sagawa?: Types.SagawaDeliveryDetail[] | undefined
        yamato?: Types.YamatoDeliveryDetail[] | undefined
      }

      total: number

      summary: {
        sagawa?: {
          /** 商品代金(ヤマト) */
          amount?: string | undefined
          /** 代引き手数料(ヤマト) */
          cash_on_delivery_fee?: string | undefined
          /** カード決済手数料(ヤマト) */
          card_fee?: string | undefined
          /** 印紙代(ヤマト) */
          stamp?: string | undefined
          /** 入金処理金額(ヤマト) */
          processing_amount?: string | undefined
        } | undefined

        yamato?: {
          /** 商品代金(佐川) */
          amount?: string | undefined
          /** 代引き手数料(佐川) */
          cash_on_delivery_fee?: string | undefined
          /** カード決済手数料(佐川) */
          card_fee?: string | undefined
          /** 印紙代(佐川) */
          stamp?: string | undefined
          /** 入金処理金額(佐川) */
          processing_amount?: string | undefined
        } | undefined
      }
    }
  }

  /** 振込データを取り込みます */
  post: {
    status: 200
    reqFormat: FormData

    reqBody: {
      /** 取込ファイル(荒木) */
      file_araki: (File | ReadStream)
      /** 取込ファイル(佐川) */
      file_sagawa: (File | ReadStream)
      /** 取込ファイル(ヤマト) */
      file_yamato: (File | ReadStream)
      /** 振込手数料(佐川) */
      commission_sagawa: number
      /** 振込手数料(ヤマト) */
      commission_yamato: number
    }
  }

  /** 入荷予定に紐づいて、在庫・仕入計上予定を更新します。更新のみ可能です。 */
  put: {
    query?: Types.Embed | undefined
    status: 200

    /** OK */
    resBody: {
      items?: Types.CashOnDeliveryBulkTarget | undefined
    }

    reqBody: {
      items?: Types.CashOnDeliveryBulkTarget | undefined
    } & Types.BulkRequest
  }
}
