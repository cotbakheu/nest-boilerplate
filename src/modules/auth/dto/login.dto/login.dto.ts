import { IsString, IsNotEmpty } from 'class-validator'
import { LoginReqPayload } from '../../types/auth.type'

export class LoginDto implements LoginReqPayload {
  @IsNotEmpty({ message: 'Username tidak boleh kosong' })
  @IsString()
  username: string

  @IsNotEmpty({ message: 'Password tidak boleh kosong' })
  @IsString()
  password: string
}
