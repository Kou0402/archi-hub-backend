import { Archi, Prisma } from '.prisma/client'
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ArchisService } from './archis.service'
import { CreateArchiDto } from './dto/create-archi.dto'
import { FindArchiResponseDto } from './dto/find-archi.dto'
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
  async findAll(): Promise<FindArchiResponseDto[]> {
    const archis = await this.archisService.findAll()
    return archis.map((archi) => {
      return {
        id: archi.id,
        title: archi.title,
        type: archi.type,
        scale: archi.scale,
        author: archi.author,
        elements: [
          ...archi.frontElements.map((frontElement) => frontElement.element),
          ...archi.backElements.map((backElement) => backElement.element),
          ...archi.infraElements.map((infraElement) => infraElement.element),
        ],
        updatedAt: archi.updatedAt,
      }
    })
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
