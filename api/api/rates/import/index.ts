/* eslint-disable */
import type { ReadStream } from 'fs'

export type Methods = {
  /** TTMレートデータを取り込みます。 */
  post: {
    status: 200
    reqFormat: FormData

    reqBody: {
      /** TTMレートデータファイル。 */
      file?: (File | ReadStream) | undefined
    }
  }
}
