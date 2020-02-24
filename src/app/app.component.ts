import { Component } from '@angular/core';
import { ITvDataforUI } from './itv-datafor-ui';
import { TvMazeDataService } from './tv-maze-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TV-Maze-App-New';

  currentTvData: ITvDataforUI[];
  constructor(private tvService: TvMazeDataService) { }

  doSearch(fieldValue){
      this.tvService.getTVData(fieldValue).subscribe(data => this.currentTvData = data);
  }
  
}
