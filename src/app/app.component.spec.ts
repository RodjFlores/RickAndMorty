import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule, AppComponent],
}).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'RickAndMorty'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('RickAndMorty');
  });

  it('should render router links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#characterLink')?.textContent).toContain(
      'Character',
    );
    expect(compiled.querySelector('#episodeLink')?.textContent).toContain(
      'Episodes',
    );
    expect(compiled.querySelector('#connectLink')?.textContent).toContain(
      'Connect',
    );
  });
});
