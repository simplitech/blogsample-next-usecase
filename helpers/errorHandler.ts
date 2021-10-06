import {CombinedError} from "@urql/core/dist/types/utils/error";
import {UseFormSetError} from "react-hook-form/dist/types/form";
import {UseToastOptions} from "@chakra-ui/react";

/**
 * Shows the GraphQL errors represented in multiple ways
 * @param error the CombinedError object
 * @param handlers react-form-hook's setError and/or Chakra's toast method
 */
export function errorHandler(error: CombinedError, handlers: { setError?: UseFormSetError<any>, toast?: (options?: (UseToastOptions | undefined)) => (string | number | undefined) }) {
  const gError = error.graphQLErrors[0]
  if (gError) {
    const oError: any = gError.originalError
    const path = oError.extensions?.path ?? oError.extensions?.exception?.path ?? ''

    if (handlers.setError && path.length) {
      handlers.setError(path, {
        message: gError.message,
      })
    }

    if (handlers.toast) {
      handlers.toast({
        title: gError.message,
        status: "error",
        duration: 6000,
        isClosable: true,
      })
    }
  }
}
