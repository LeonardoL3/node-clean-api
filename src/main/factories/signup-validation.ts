import { CompareFieldsValidation } from '../../presentation/helper/validations/compare-fields-validation'
import { EmailValidation } from '../../presentation/helper/validations/email-validation'
import { RequiredFieldValidation } from '../../presentation/helper/validations/required-field-validation'
import { Validation } from '../../presentation/helper/validations/validation'
import { ValidationComposite } from '../../presentation/helper/validations/validation-composite'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }

  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))

  return new ValidationComposite(validations)
}
