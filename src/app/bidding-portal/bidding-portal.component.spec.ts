import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingPortalComponent } from './bidding-portal.component';

describe('BiddingPortalComponent', () => {
  let component: BiddingPortalComponent;
  let fixture: ComponentFixture<BiddingPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
