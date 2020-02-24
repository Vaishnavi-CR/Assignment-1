export interface ITvDatafromAPI {
  show: {
    id: number,
    name: string,
    language: string,
    genres: string[],
    runtime: number,
    schedule: {
              time:string,
              days:string[]
              },
    image: { medium: string } | null
  }
}
