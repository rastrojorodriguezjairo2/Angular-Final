import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativoComponent } from './administrativos.component';

describe('AdministrativosComponent', () => {
  let component: AdministrativoComponent;
  let fixture: ComponentFixture<AdministrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
