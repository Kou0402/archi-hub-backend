import { Injectable } from '@nestjs/common'
import { CreateArchiDto } from './dto/create-archi.dto'
import { UpdateArchiDto } from './dto/update-archi.dto'

@Injectable()
export class ArchisService {
  create(createArchiDto: CreateArchiDto) {
    return 'This action adds a new archi'
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
