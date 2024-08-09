import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VIPRequestComponent } from './vip-request.component';

describe('VIPRequestComponent', () => {
  let component: VIPRequestComponent;
  let fixture: ComponentFixture<VIPRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VIPRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VIPRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
