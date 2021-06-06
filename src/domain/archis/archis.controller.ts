import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ArchisService } from './archis.service'
import { CreateArchiDto } from './dto/create-archi.dto'
import { UpdateArchiDto } from './dto/update-archi.dto'

@Controller('archis')
export class ArchisController {
  constructor(private readonly archisService: ArchisService) {}

  @Post()
  create(@Body() createArchiDto: CreateArchiDto) {
    return this.archisService.create(createArchiDto)
  }

  @Get()
  findAll() {
    return this.archisService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.archisService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArchiDto: UpdateArchiDto) {
    return this.archisService.update(+id, updateArchiDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.archisService.remove(+id)
  }
}
