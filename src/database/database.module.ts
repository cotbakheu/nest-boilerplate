import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
// import { User } from './entities/User.entity'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],

      useFactory(configService: ConfigService) {
        console.log(configService.get('database.type'))
        return {
          ...configService.get('database'),
        }
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModuleModule {}
