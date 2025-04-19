import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlzIconComponent } from './alz-icon.component';

describe('AlzIconComponent', () => {
  let component: AlzIconComponent;
  let fixture: ComponentFixture<AlzIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlzIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlzIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
