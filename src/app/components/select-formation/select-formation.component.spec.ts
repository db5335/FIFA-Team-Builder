import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormationComponent } from './select-formation.component';

describe('SelectFormationComponent', () => {
  let component: SelectFormationComponent;
  let fixture: ComponentFixture<SelectFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
