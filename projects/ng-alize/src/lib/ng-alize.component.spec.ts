import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAlizeComponent } from './ng-alize.component';

describe('NgAlizeComponent', () => {
  let component: NgAlizeComponent;
  let fixture: ComponentFixture<NgAlizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAlizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgAlizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
