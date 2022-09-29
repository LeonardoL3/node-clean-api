import { CompareFieldsValidation } from '../../presentation/helper/validations/compare-fields-validation'
import { RequiredFieldValidation } from '../../presentation/helper/validations/required-field-validation'
import { Validation } from '../../presentation/helper/validations/validation'
import { ValidationComposite } from '../../presentation/helper/validations/validation-composite'
import { makeSignUpValidation } from './signup-validation'

jest.mock('../../presentation/helper/validations/validation-composite')

describe('SignUpValidation Factory', () => {
  it('Should call ValidationComposite with all validations', () => {
    makeSignUpValidation()

    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }

    validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))

    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
