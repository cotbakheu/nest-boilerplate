import { Body, Controller, Get } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto/login.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  login(@Body() payload: LoginDto) {
    console.log(`${__dirname}/../**/*.entity{.ts,.js}`)
    return this.authService.login(payload)
  }
}
