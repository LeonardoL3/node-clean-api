import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helper/http-helper'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }

    const requiredFields = ['name', 'email', 'password', 'confirm_password']

    for (const requiredField of requiredFields) {
      if (!httpRequest.body[requiredField]) {
        return badRequest(new MissingParamError(requiredField))
      }
    }

    return {
      statusCode: 200,
      body: 'show'
    }
  }
}
