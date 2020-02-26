import { Component, OnInit, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { TvMazeDataService } from "../tv-maze-data.service";
import { EventEmitter } from '@angular/core';
@Component({
  selector: "app-show-search",
  templateUrl: "./show-search.component.html",
  styleUrls: ["./show-search.component.css"]
})
export class ShowSearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>()

  searchbox = new FormControl();
  fieldValue = "";
  i = 0;
  constructor(private tvService: TvMazeDataService) {}

  ngOnInit() {
    this.i = 0;
  
  }

  searchBoxBlur() {
    if (!this.searchbox.invalid && this.searchbox.value) {
      this.fieldValue=this.searchbox.value
      this.searchEvent.emit(this.fieldValue)
    }
  }
}
