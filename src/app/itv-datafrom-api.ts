export interface ITvDatafromAPI {
  show: {
    id: number,
    name: string,
    language: string,
    genres: string[],
    runtime: number | string,
    schedule: {
              time:string,
              days:string[]
              },
    image: { medium: string } | null,
    network: {
      country:{
        timezone: string
      }
    },
    webChannel: {
      country:{
        timezone: string
      }
    },
    rating: {
      average: string
    },
    status: string

  }
}
