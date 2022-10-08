import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerModalComponentComponent } from './manager-modal-component.component';

describe('ManagerModalComponentComponent', () => {
  let component: ManagerModalComponentComponent;
  let fixture: ComponentFixture<ManagerModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerModalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
