import { Module } from '@nestjs/common'
import { ArchisModule } from './domain/archis/archis.module'
import { GlobalModule } from './global.module'

@Module({
  imports: [GlobalModule, ArchisModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
