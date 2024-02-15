/* eslint-disable */
import type { ReadStream } from 'fs'

export type Methods = {
  /** ファイルをアップロードします。 */
  post: {
    status: 200

    /** OK */
    resBody: {
      file_keys?: string[] | undefined
    }

    reqFormat: FormData

    reqBody: {
      file?: (File | ReadStream)[] | undefined
    }
  }
}
