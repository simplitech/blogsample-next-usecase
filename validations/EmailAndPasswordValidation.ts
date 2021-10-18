import { string, object, SchemaOf } from 'yup'
import EmailAndPassword from 'types/EmailAndPassword'

const EmailAndPasswordValidation: SchemaOf<EmailAndPassword> = object({
  email: string().defined().email(),
  password: string().defined().min(5),
})

export default EmailAndPasswordValidation
