import { Module } from '@nestjs/common'
import { AuthModule } from './modules/auth/auth.module'
import { CoreModule } from './core/core.module'
import { DatabaseModuleModule } from './database/database.module'
import { ConfigModule } from '@nestjs/config'
import { AppConfig, DatabaseConfig } from './config'

@Module({
  imports: [
    // Config Module
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [AppConfig, DatabaseConfig],
    }),
    // Database Module
    DatabaseModuleModule,
    // Feature Modules
    AuthModule,
    CoreModule,
  ],
})
export class AppModule {}
