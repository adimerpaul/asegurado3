import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsercionAfiliadoComponent } from './insercion-afiliado.component';

describe('InsercionAfiliadoComponent', () => {
  let component: InsercionAfiliadoComponent;
  let fixture: ComponentFixture<InsercionAfiliadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsercionAfiliadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsercionAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
