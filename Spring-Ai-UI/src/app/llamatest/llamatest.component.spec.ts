import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamatestComponent } from './llamatest.component';

describe('LlamatestComponent', () => {
  let component: LlamatestComponent;
  let fixture: ComponentFixture<LlamatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LlamatestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LlamatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
