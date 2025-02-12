import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OloComponent } from './olo.component';

describe('OloComponent', () => {
  let component: OloComponent;
  let fixture: ComponentFixture<OloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
