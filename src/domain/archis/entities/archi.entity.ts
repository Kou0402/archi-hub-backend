export class Archi {
  appId: string
  appTitle: string
  appType: 'Webアプリ' | 'スマホアプリ'
  appScale: '個人開発' | '小規模' | '中規模' | '大規模'
  author: string
  createdAt: Date
  frontElements?: string[]
  backElements?: string[]
  infraElements?: string[]
  archiDescription?: string
}
