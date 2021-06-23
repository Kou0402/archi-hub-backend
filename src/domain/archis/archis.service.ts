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
    return this.prisma.archi.findUnique({
      include: {
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
      },
      where: {
        id,
      },
    })
  }
}
