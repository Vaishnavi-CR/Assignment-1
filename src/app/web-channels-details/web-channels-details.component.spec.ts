import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebChannelsDetailsComponent } from './web-channels-details.component';

describe('WebChannelsDetailsComponent', () => {
  let component: WebChannelsDetailsComponent;
  let fixture: ComponentFixture<WebChannelsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebChannelsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebChannelsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
