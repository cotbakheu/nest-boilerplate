import { Injectable } from '@nestjs/common'
import { LoginReqPayload } from './types/auth.type'

@Injectable()
export class AuthService {
  constructor() {}

  login(data: LoginReqPayload): { name: string } {
    return {
      name: data.username,
    }
  }
}
