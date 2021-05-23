import { Module } from '@nestjs/common'
import { ArchiShortsService } from './archi-shorts.service'
import { ArchiShortsController } from './archi-shorts.controller'

@Module({
  controllers: [ArchiShortsController],
  providers: [ArchiShortsService],
})
export class ArchiShortsModule {}
