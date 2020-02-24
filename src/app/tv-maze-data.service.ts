import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { ITvDataforUI } from "./itv-datafor-ui";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ITvDatafromAPI } from "./itv-datafrom-api";
import { ITvService } from "./itv-service";

@Injectable({
  providedIn: "root"
})
export class TvMazeDataService implements ITvService {
  tempArray: ITvDataforUI[] = [];

  constructor(private httpClient: HttpClient) {}

  getTVData(showname: string): Observable<ITvDataforUI[]> {
    return this.httpClient
      .get<ITvDatafromAPI[]>(
        `${environment.dummyUrl}/search/shows?q=${showname}`
      )
      .pipe(map(data => this.transformToITvMaze(data)));
  }

  private transformToITvMaze(data: ITvDatafromAPI[]): ITvDataforUI[] {
    console.log(data);
    var i: number = 0;

    for (let eachobject of data) {
      this.tempArray[i] = {
        id: eachobject.show.id,
        name: eachobject.show.name,
        language: eachobject.show.language,
        genre: (eachobject.show.genres.length > 0)? eachobject.show.genres: ["No Information Available"],
        runtime: eachobject.show.runtime,
        time: eachobject.show.schedule.time,
        days: eachobject.show.schedule.days,
        image: this.checkImage(eachobject)
      };
      i++;
    }
    return this.tempArray;
  }

  private checkImage(eachobject: ITvDatafromAPI): string {
    if (eachobject.show.image === null) {
      return "https://i.imgur.com/42Vx164.png";
    } else {
      return eachobject.show.image.medium;
    }
  }

}
