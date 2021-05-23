import { Module } from '@nestjs/common'
import { ArchiShortsModule } from './domain/archi-shorts/archi-shorts.module';

@Module({
  imports: [ArchiShortsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
