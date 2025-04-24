import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureAnimationComponent } from './signature-animation.component';

describe('SignatureAnimationComponent', () => {
  let component: SignatureAnimationComponent;
  let fixture: ComponentFixture<SignatureAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SignatureAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignatureAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
