import { Module } from '@nestjs/common'
import { ArchiShortsModule } from './domain/archi-shorts/archi-shorts.module'
import { ArchisModule } from './domain/archis/archis.module'

@Module({
  imports: [ArchiShortsModule, ArchisModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
