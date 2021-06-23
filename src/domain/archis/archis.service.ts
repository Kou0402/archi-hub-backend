import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { Archi, Prisma } from '@prisma/client'

@Injectable()
export class ArchisService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ArchiCreateInput): Promise<Archi> {
    return this.prisma.archi.create({ data })
  }

  findAll() {
    return this.prisma.archi.findMany({
      select: {
        id: true,
        title: true,
        type: true,
        scale: true,
        author: true,
        frontElements: {
          select: {
            element: true,
          },
        },
        backElements: {
          select: {
            element: true,
          },
        },
        infraElements: {
          select: {
            element: true,
          },
        },
        updatedAt: true,
      },
    })
  }

  findOne(id: number) {
    const tmpResults = {
      id,
      title: 'アプリタイトル',
      type: 'Webアプリ',
      scale: '中規模',
      author: 'kou6363',
      description: 'アーキテクチャの解説アーキテクチャの解説アーキテクチャの解説',
      frontElements: ['React', 'Next'],
      backElements: ['Node', 'Nest'],
      infraElements: ['Vercel', 'Heroku'],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    return tmpResults
  }
}
