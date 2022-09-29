import { CompareFieldsValidation } from '../../presentation/helper/validations/compare-fields-validation'
import { RequiredFieldValidation } from '../../presentation/helper/validations/required-field-validation'
import { Validation } from '../../presentation/helper/validations/validation'
import { ValidationComposite } from '../../presentation/helper/validations/validation-composite'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }

  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))

  return new ValidationComposite(validations)
}
