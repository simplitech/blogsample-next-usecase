import {CombinedError} from "@urql/core/dist/types/utils/error";
import {UseFormSetError} from "react-hook-form/dist/types/form";
import {UseToastOptions} from "@chakra-ui/react";
import i18next from "i18next";
import {RegisterOptions} from "react-hook-form/dist/types/validator";

/**
 * Translates the error information
 * @param messageKeyAndPayload a message key that is registered on lang.json files inside the "error" section, optionally you can
 * also include an extraPayload inside this string, eg.: 'minLength:3'
 * @param variables the variables related to the error, eg.: 'password'
 */
export function translateError(messageKeyAndPayload: string, ...variables: string[]): string {
  const [msgKey, extraPayload] = messageKeyAndPayload.split(':')
  return i18next.t(`error.${msgKey}`, [...variables, extraPayload])
}

/**
 * Adapt the RegisterOptions to pass the value as an extraPayload to the translation
 * @param options
 */
export function validations(options: RegisterOptions): RegisterOptions {
  return Object.keys(options).reduce<RegisterOptions>((acc, curr) => {
    const value = options[curr]
    acc[curr] = {
      ...options[curr],
      message: `${curr}:${value}`,
      value,
    }
    return acc
  }, {})
}

/**
 * Shows the GraphQL errors represented in multiple ways
 * @param error the CombinedError object
 * @param handlers react-form-hook's setError and/or Chakra's toast method
 */
export function errorHandler(error: CombinedError, handlers: { setError?: UseFormSetError<any>, toast?: (options?: (UseToastOptions | undefined)) => (string | number | undefined) }) {
  const gError = error.graphQLErrors[0]
  if (gError) {
    const oError: any = gError.originalError
    const argumentName = (oError.extensions && oError.extensions.argumentName) || ''

    if (handlers.setError && argumentName.length) {
      handlers.setError(argumentName, {
        message: gError.message,
      })
    }

    if (handlers.toast) {
      handlers.toast({
        title: translateError(gError.message, argumentName),
        status: "error",
        duration: 6000,
        isClosable: true,
      })
    }
  }
}
