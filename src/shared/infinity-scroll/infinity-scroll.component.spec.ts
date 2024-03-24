import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinityScrollComponent } from './infinity-scroll.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { Paginator } from '../../models/Paginator';
import { SharedModule } from '../shared.module';
import { ScrollMode } from '../../enums/ScrollMode.enum';

describe('InfinityScrollComponent', () => {
  let component: InfinityScrollComponent;
  let fixture: ComponentFixture<InfinityScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientModule, RouterModule.forRoot([]), SharedModule, InfinityScrollComponent],
}).compileComponents();

    fixture = TestBed.createComponent(InfinityScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display character mode list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.paginator$ = of({
      items: [
        {
          name: 'test character',
          status: 'test status',
          species: 'test species',
          episode: [],
          id: 0,
        },
      ],
    } as Paginator);
    fixture.detectChanges();
    expect(compiled.querySelector('#char-name')?.textContent).toContain(
      'test character',
    );
  });

  it('should display episode mode list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.mode = ScrollMode.EPISODE;
    component.paginator$ = of({
      items: [
        {
          name: 'test episode',
          episode: 'S01E01',
          id: 0,
        },
      ],
    } as Paginator);
    fixture.detectChanges();
    expect(compiled.querySelector('#ep-name')?.textContent).toContain(
      'test episode',
    );
  });
});
