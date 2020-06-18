import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOverWindowComponent } from './game-over-window.component';

describe('GameOverWindowComponent', () => {
  let component: GameOverWindowComponent;
  let fixture: ComponentFixture<GameOverWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOverWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOverWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
