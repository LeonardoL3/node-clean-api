import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, serverError, unauthorized } from '../../helper/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { Authentication } from '../../../domain/usecases/authentication'
import { EmailValidator } from '../signup/signup-protocols'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly authentication: Authentication

  constructor (emailValidator: EmailValidator, authentication: Authentication) {
    this.emailValidator = emailValidator
    this.authentication = authentication
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['email', 'password']
      for (const requiredField of requiredFields) {
        if (!httpRequest.body[requiredField]) {
          return await new Promise(resolve => resolve(badRequest(new MissingParamError(requiredField))))
        }
      }

      const { email, password } = httpRequest.body

      const isValidEmail = this.emailValidator.isValid(email)
      if (!isValidEmail) {
        return await new Promise(resolve => resolve(badRequest(new InvalidParamError('email'))))
      }

      const acccessToken = await this.authentication.authenticate({ email, password })

      if (!acccessToken) {
        return unauthorized()
      }

      return {
        statusCode: 200,
        body: 'show'
      }
    } catch (err: any) {
      return serverError(err)
    }
  }
}
