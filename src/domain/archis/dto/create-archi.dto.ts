export class CreateArchiRequestDto {
  title: string
  type: string
  scale: string
  author: string
  description?: string
  frontElements?: string[]
  backElements?: string[]
  infraElements?: string[]
}
