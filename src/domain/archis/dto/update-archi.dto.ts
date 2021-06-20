import { PartialType } from '@nestjs/mapped-types'
import { CreateArchiRequestDto } from './create-archi.dto'

export class UpdateArchiDto extends PartialType(CreateArchiRequestDto) {}
