import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyNewsComponent } from './egy-news.component';

describe('EgyNewsComponent', () => {
  let component: EgyNewsComponent;
  let fixture: ComponentFixture<EgyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EgyNewsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
