import { Test, TestingModule } from '@nestjs/testing'
import { ArchisService } from './archis.service'

describe('ArchisService', () => {
  let service: ArchisService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArchisService],
    }).compile()

    service = module.get<ArchisService>(ArchisService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
