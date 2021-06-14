export class CreateArchiDto {
  title: string
  type: string
  scale: string
  author: string
  description?: string
  frontElements?: ArchiElement[]
  backElements?: ArchiElement[]
  infraElements?: ArchiElement[]
}
export class ArchiElement {
  element: string
}
