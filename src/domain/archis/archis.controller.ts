import { Archi, Prisma } from '.prisma/client'
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ArchisService } from './archis.service'
import { CreateArchiDto } from './dto/create-archi.dto'
import { UpdateArchiDto } from './dto/update-archi.dto'

@Controller('archis')
export class ArchisController {
  constructor(private readonly archisService: ArchisService) {}

  @Post()
  create(@Body() createArchiDto: CreateArchiDto): Promise<Archi> {
    const ArchiCreateInput: Prisma.ArchiCreateInput = {
      title: createArchiDto.title,
      type: createArchiDto.type,
      scale: createArchiDto.scale,
      author: createArchiDto.author,
      description: createArchiDto.description,
      frontElements: {
        create: createArchiDto.frontElements,
      },
      backElements: {
        create: createArchiDto.backElements,
      },
      infraElements: {
        create: createArchiDto.infraElements,
      },
    }
    return this.archisService.create(ArchiCreateInput)
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
