import { LogErrorRepository } from '../../../../data/protocols/log-error-repository'
import { MongoHelper } from '../helpers/mongo-helper'

export class LogMongoRepository implements LogErrorRepository {
  async logError (log: string): Promise<void> {
    const errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.insertOne({
      log,
      date: new Date()
    })
  }
}
