import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodeViewComponent } from './episode-view.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { Episode } from '../../../models/Episode';
import { SharedModule } from '../../../shared/shared.module';

describe('EpisodeViewComponent', () => {
  let component: EpisodeViewComponent;
  let fixture: ComponentFixture<EpisodeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeViewComponent],
      imports: [HttpClientModule,RouterModule.forRoot([]),SharedModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EpisodeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display episode detail', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.episode$ = of({
      name:'test ep',
    } as Episode)
    fixture.detectChanges();
    expect(compiled.querySelector('#ep-name')?.textContent).toContain('test ep');
  });
});
