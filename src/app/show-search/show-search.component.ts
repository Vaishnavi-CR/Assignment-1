import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { TvMazeDataService } from "../tv-maze-data.service";
@Component({
  selector: "app-show-search",
  templateUrl: "./show-search.component.html",
  styleUrls: ["./show-search.component.css"]
})
export class ShowSearchComponent implements OnInit {
  searchbox = new FormControl();
  fieldValue = "";
  i = 0;
  constructor(private tvService: TvMazeDataService) {}

  ngOnInit() {
    this.i = 0;
    // this.searchbox.valueChanges.subscribe((searchValue: string) => {

    //   if (!this.searchbox.invalid && searchValue) {
    //     this.tvService
    //       .getTVData(searchValue)
    //       .subscribe(data => console.log(data));
    //   }
    // });
  }

  searchBoxBlur() {
    if (!this.searchbox.invalid && this.searchbox.value) {
      console.log(this.searchbox.value);
      this.tvService.getTVData(this.searchbox.value).subscribe(data => {
        console.log(this.i);
        this.i = this.i + 1;
        console.log(data);
      });
    }
  }
}
