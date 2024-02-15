/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** ログインします。 */
  post: {
    status: 204

    resHeaders: {
      'Set-Cookie': string
    }

    reqBody: Types.LoginRequest
  }
}
