import { Component, OnInit } from '@angular/core';
import { ITvDataforUI } from '../itv-datafor-ui';
import { TvMazeDataService } from '../tv-maze-data.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  currentTvData: ITvDataforUI[];
  constructor(private tvService: TvMazeDataService) { }

  doSearch(fieldValue){
      this.tvService.getTVData(fieldValue).subscribe(data => this.currentTvData = data);
      
  }

  ngOnInit(): void {
  }

}
