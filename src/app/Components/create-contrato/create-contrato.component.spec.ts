import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContratoComponent } from './create-contrato.component';

describe('CreateContratoComponent', () => {
  let component: CreateContratoComponent;
  let fixture: ComponentFixture<CreateContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateContratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
