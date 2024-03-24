import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterViewComponent } from './character-view.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Character } from '../../../models/Character';
import { SharedModule } from '../../../shared/shared.module';
import { of } from 'rxjs';

describe('CharacterViewComponent', () => {
  let component: CharacterViewComponent;
  let fixture: ComponentFixture<CharacterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientModule, RouterModule.forRoot([]), SharedModule, CharacterViewComponent],
}).compileComponents();

    fixture = TestBed.createComponent(CharacterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display character detail', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.character$ = of({
      name: 'test character',
      origin: { name: 'test' },
      location: { name: 'test' },
      episode: [],
    } as Character);
    fixture.detectChanges();
    expect(compiled.querySelector('#char-name')?.textContent).toContain(
      'test character',
    );
  });
});
