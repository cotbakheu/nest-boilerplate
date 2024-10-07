import { registerAs } from '@nestjs/config'

export default registerAs('app', () => ({
  port: process.env.PORT || 3000,
  nodeenv: process.env.NODE_ENV || 'development',
}))
