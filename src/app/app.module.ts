import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvAppComponent } from './tv-app/tv-app.component';
import { TvMazeDataService } from './tv-maze-data.service'
import { HttpClientModule } from '@angular/common/http';
import { ShowSearchComponent } from './show-search/show-search.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import 'hammerjs'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatGridListModule } from '@angular/material/grid-list'
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { NetworkDetailsComponent } from './network-details/network-details.component';
import { WebChannelsDetailsComponent } from './web-channels-details/web-channels-details.component';
import { ShowsComponent } from './shows/shows.component';

const appRoutes: Routes = [
  { path: 'Shows', component: ShowsComponent },
  { path: 'People',component: PeopleDetailsComponent },
  { path: 'Networks', component:NetworkDetailsComponent },
  { path: 'WebChannels',component: WebChannelsDetailsComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    TvAppComponent,
    ShowSearchComponent,
    PeopleDetailsComponent,
    NetworkDetailsComponent,
    WebChannelsDetailsComponent,
    ShowsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    RouterModule.forChild(appRoutes),
    BrowserModule, 
    HttpClientModule,    
    BrowserAnimationsModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [TvMazeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
