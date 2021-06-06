import { PartialType } from '@nestjs/mapped-types';
import { CreateArchiDto } from './create-archi.dto';

export class UpdateArchiDto extends PartialType(CreateArchiDto) {}
