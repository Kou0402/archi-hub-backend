import { Module } from '@nestjs/common'
import { ArchiShortsModule } from './domain/archi-shorts/archi-shorts.module'
import { ArchisModule } from './domain/archis/archis.module'
import { GlobalModule } from './global.module'

@Module({
  imports: [GlobalModule, ArchiShortsModule, ArchisModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
