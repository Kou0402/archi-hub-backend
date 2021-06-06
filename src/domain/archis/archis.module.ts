import { Module } from '@nestjs/common'
import { ArchisService } from './archis.service'
import { ArchisController } from './archis.controller'

@Module({
  controllers: [ArchisController],
  providers: [ArchisService],
})
export class ArchisModule {}
