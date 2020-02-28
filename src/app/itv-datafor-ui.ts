export interface ITvDataforUI {
  id: number,
  name: string,
  language: string,
  genre: string[],
  runtime: number | string,
  time: string,
  days: string[],
  image: string | object | null 
  timezone: string,
  rating: string,
  status: string
}
