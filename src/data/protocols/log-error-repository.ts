
export interface LogErrorRepository {
  logError: (log: string) => Promise<void>
}
