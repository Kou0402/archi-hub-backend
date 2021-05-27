import { Injectable } from '@nestjs/common'
import { ArchiShort } from './entities/archi-short.entity'

@Injectable()
export class ArchiShortsService {
  findAll(): ArchiShort[] {
    const tmpResults: ArchiShort[] = [
      {
        appId: 'uuid-hoge',
        appTitle: 'アプリタイトル',
        appType: 'Webアプリ',
        appScale: '中規模',
        appElements: ['React', 'Node', 'AWS', 'DynamoDB'],
      },
      {
        appId: 'uuid-hoge2',
        appTitle: 'アプリタイトル2',
        appType: 'Webアプリ',
        appScale: '小規模',
        appElements: ['React', 'Node', 'AWS', 'DynamoDB'],
      },
    ]
    return tmpResults
  }
}
