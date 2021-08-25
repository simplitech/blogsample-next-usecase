import React from 'react';
import {FormErrorMessage} from '@chakra-ui/react';
import {FieldErrors} from "react-hook-form/dist/types/errors";
import {translateError} from "../helper/errorHandler";
import {FormErrorMessageProps} from "@chakra-ui/form-control/dist/types/form-error";

const FormError = (props: {errors: FieldErrors, field: string} & FormErrorMessageProps) => {
  const messageKey = props.errors[props.field]?.message || props.errors[props.field]?.type
  return (
          <FormErrorMessage {...props}>
            {props.errors[props.field] && translateError(messageKey, props.field) }
          </FormErrorMessage>
  );
};

export default FormError;
