import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  url: '' as string,

  async connect (url: string): Promise<void> {
    this.url = url
    this.client = await MongoClient.connect(url)
  },

  async disconnect () {
    await this.client.close()
  },

  async getCollection (name: string): Promise<Collection> {
    if (this.client === null) {
      await this.connect(this.url)
    }
    return this.client.db().collection(name)
  }

}
