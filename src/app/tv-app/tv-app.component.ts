import { Component, OnInit, Input } from '@angular/core';
import { ITvDataforUI } from '../itv-datafor-ui';
import { TvMazeDataService } from '../tv-maze-data.service'

@Component({
  selector: 'app-tv-app',
  templateUrl: './tv-app.component.html',
  styleUrls: ['./tv-app.component.css']
})
export class TvAppComponent implements OnInit {
  @Input() current: ITvDataforUI[]
  constructor(private tvService: TvMazeDataService) { }

  ngOnInit() {
  }
}
