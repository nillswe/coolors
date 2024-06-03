export type ColorGroupModel = Record<string, ColorModel[]>

export type ColorModel = {
  weight: number
  hexadecimal: string
  featured: boolean
}
