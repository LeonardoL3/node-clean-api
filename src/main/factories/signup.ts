import { SignUpController } from '../../presentation/controllers/signup/signup'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { Controller } from '../../presentation/protocols'
import { LogControllerDecorator } from '../decorators/log'
import { LogMongoRepository } from '../../infra/db/mongodb/log-repository/log'
import { makeSignUpValidation } from './signup-validation'

export const makeSignUpController = (): Controller => {
  const salt = 12
  const bcriptAdapter = new BcryptAdapter(salt)
  const logMongoRepository = new LogMongoRepository()
  const accountMongoRepository = new AccountMongoRepository()
  const validationComposite = makeSignUpValidation()
  const dbAddAccount = new DbAddAccount(bcriptAdapter, accountMongoRepository)
  const signUpController = new SignUpController(dbAddAccount, validationComposite)
  return new LogControllerDecorator(signUpController, logMongoRepository)
}
