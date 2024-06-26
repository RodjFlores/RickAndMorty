import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyApiService } from '../../../services/rickandmortyapi.service';
import { Observable } from 'rxjs';
import { Location, NgStyle, AsyncPipe, TitleCasePipe } from '@angular/common';
import { Character } from '../../../models/Character';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrl: './character-view.component.css',
  standalone: true,
  imports: [NgStyle, AsyncPipe, TitleCasePipe],
})
export class CharacterViewComponent implements OnInit {
  public character$: Observable<Character>;

  constructor(
    private route: ActivatedRoute,
    private api: RickAndMortyApiService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.character$ = this.api.getCharacter(params['id']);
      }
    });
  }
  /**
   * Navigates back to previous page.
   */
  public navigateBack() {
    this.location.back();
  }
}
