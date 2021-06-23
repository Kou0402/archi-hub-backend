import { Prisma } from '.prisma/client'
import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { ArchisService } from './archis.service'
import { CreateArchiRequestDto, FindOneArchiResponseDto } from './archis.dto'
import { FindAllArchiResponseDto } from './archis.dto'

@Controller('archis')
export class ArchisController {
  constructor(private readonly archisService: ArchisService) {}

  @Post()
  create(@Body() createArchiDto: CreateArchiRequestDto) {
    const ArchiCreateInput: Prisma.ArchiCreateInput = {
      title: createArchiDto.title,
      type: createArchiDto.type,
      scale: createArchiDto.scale,
      author: createArchiDto.author,
      description: createArchiDto.description,
      frontElements: {
        create: this.convertStringsToElements(createArchiDto.frontElements),
      },
      backElements: {
        create: this.convertStringsToElements(createArchiDto.backElements),
      },
      infraElements: {
        create: this.convertStringsToElements(createArchiDto.infraElements),
      },
    }
    return this.archisService.create(ArchiCreateInput)
  }

  @Get()
  async findAll(): Promise<FindAllArchiResponseDto[]> {
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
  async findOne(@Param('id') id: string): Promise<FindOneArchiResponseDto> {
    const archi = await this.archisService.findOne(Number(id))
    return {
      id: archi.id,
      title: archi.title,
      type: archi.type,
      scale: archi.scale,
      author: archi.author,
      createdAt: archi.createdAt,
      description: archi.description,
      frontElements: [...archi.frontElements.map((frontElement) => frontElement.element)],
      backElements: [...archi.backElements.map((backElement) => backElement.element)],
      infraElements: [...archi.infraElements.map((infraElement) => infraElement.element)],
    }
  }

  convertStringsToElements = (strings: string[]): { element: string }[] => {
    return strings.map((value) => {
      return {
        element: value,
      }
    })
  }
}
