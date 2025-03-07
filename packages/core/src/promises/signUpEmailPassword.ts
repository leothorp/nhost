import { USER_ALREADY_SIGNED_IN } from '../errors'
import { AuthInterpreter, SignUpOptions } from '../types'

import {
  ActionLoadingState,
  NeedsEmailVerificationState,
  SessionActionHandlerResult
} from './types'

export interface SignUpEmailPasswordHandlerResult
  extends SessionActionHandlerResult,
    NeedsEmailVerificationState {}

export interface SignUpEmailPasswordState
  extends SignUpEmailPasswordHandlerResult,
    ActionLoadingState {}

export const signUpEmailPasswordPromise = (
  interpreter: AuthInterpreter,
  email: string,
  password: string,
  options?: SignUpOptions
): Promise<SignUpEmailPasswordHandlerResult> =>
  new Promise<SignUpEmailPasswordHandlerResult>((resolve) => {
    const { changed, context } = interpreter.send('SIGNUP_EMAIL_PASSWORD', {
      email,
      password,
      options
    })
    if (!changed) {
      return resolve({
        error: USER_ALREADY_SIGNED_IN,
        accessToken: context.accessToken.value,
        isError: true,
        isSuccess: false,
        needsEmailVerification: false,
        user: context.user
      })
    }
    interpreter.onTransition((state) => {
      if (state.matches({ authentication: { signedOut: 'failed' } })) {
        resolve({
          accessToken: null,
          error: state.context.errors.registration || null,
          isError: true,
          isSuccess: false,
          needsEmailVerification: false,
          user: null
        })
      } else if (
        state.matches({
          authentication: { signedOut: 'noErrors' },
          email: 'awaitingVerification'
        })
      ) {
        resolve({
          accessToken: null,
          error: null,
          isError: false,
          isSuccess: false,
          needsEmailVerification: true,
          user: null
        })
      } else if (state.matches({ authentication: 'signedIn' })) {
        resolve({
          accessToken: state.context.accessToken.value,
          error: null,
          isError: false,
          isSuccess: true,
          needsEmailVerification: false,
          user: state.context.user
        })
      }
    })
  })
