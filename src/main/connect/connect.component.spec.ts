import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectComponent } from './connect.component';

describe('ConnectComponent', () => {
  let component: ConnectComponent;
  let fixture: ComponentFixture<ConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [ConnectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should push a message to history', () => {
    component.message = 'test';
    component.sendMessage();
    expect(component.connectionHistory.length).toBe(1);
    expect(component.connectionHistory[0]).toEqual({
      from: 'me',
      message: 'test',
    });
  });
});
