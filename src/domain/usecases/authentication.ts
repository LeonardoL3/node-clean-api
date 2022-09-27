export interface Authentication {
  authenticate: ({ email, password }: {email: string, password: string}) => Promise<string>
}
