import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UpdateArchiDto } from './dto/update-archi.dto'
import { Archi, Prisma } from '@prisma/client'

@Injectable()
export class ArchisService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ArchiCreateInput): Promise<Archi> {
    return this.prisma.archi.create({ data })
  }

  findAll() {
    return `This action returns all archis`
  }

  findOne(appId: string) {
    const tmpResults = {
      appId: appId,
      appTitle: 'アプリタイトル',
      appType: 'Webアプリ',
      appScale: '中規模',
      author: 'kou6363',
      createdAt: new Date(),
      frontElements: ['React', 'Next'],
      backElements: ['Node', 'Nest'],
      infraElements: ['Vercel', 'Heroku'],
      archiDescription: 'アーキテクチャの解説アーキテクチャの解説アーキテクチャの解説',
    }
    return tmpResults
  }

  update(id: number, updateArchiDto: UpdateArchiDto) {
    return `This action updates a #${id} archi`
  }

  remove(id: number) {
    return `This action removes a #${id} archi`
  }
}
