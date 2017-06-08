import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWeaponComponent } from './new-weapon.component';

describe('NewWeaponComponent', () => {
  let component: NewWeaponComponent;
  let fixture: ComponentFixture<NewWeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWeaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
