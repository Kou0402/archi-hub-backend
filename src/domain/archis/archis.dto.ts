import { OmitType } from '@nestjs/mapped-types'

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

export class FindAllArchiResponseDto extends OmitType(CreateArchiRequestDto, [
  'description',
  'frontElements',
  'backElements',
  'infraElements',
]) {
  id: number
  elements?: string[]
  updatedAt: Date
}

export class FindOneArchiResponseDto {
  id: number
  title: string
  type: string
  scale: string
  author: string
  createdAt: Date
  description?: string
  frontElements?: string[]
  backElements?: string[]
  infraElements?: string[]
}
