import { CallHandler, ExecutionContext, Injectable } from '@nestjs/common'
import { tap } from 'rxjs'

@Injectable()
export class LoggingInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const now = Date.now()
    const req = context.switchToHttp().getRequest()
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(`${req.method}--${req.url} ... ${Date.now() - now}ms`)
        )
      )
  }
}
