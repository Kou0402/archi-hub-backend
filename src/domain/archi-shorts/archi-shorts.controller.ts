import { Controller, Get } from '@nestjs/common'
import { ArchiShortsService } from './archi-shorts.service'
import { ArchiShort } from './entities/archi-short.entity'

@Controller('archi-shorts')
export class ArchiShortsController {
  constructor(private readonly archiShortsService: ArchiShortsService) {}
  @Get()
  findAll(): ArchiShort[] {
    return this.archiShortsService.findAll()
  }
}
