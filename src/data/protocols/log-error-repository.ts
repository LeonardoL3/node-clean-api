
export interface LogErrorRepository {
  log: (log: string) => Promise<void>
}
