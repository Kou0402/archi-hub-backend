export class CreateArchiRequestDto {
  title: string
  type: 'Webアプリ' | 'スマホアプリ'
  scale: '個人開発' | '小規模' | '中規模' | '大規模'
  author: string
  description?: string
  frontElements?: string[]
  backElements?: string[]
  infraElements?: string[]
}
