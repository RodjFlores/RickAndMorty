import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickandmortyapiService } from '../../../services/rickandmortyapi.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrl: './character-view.component.css'
})
export class CharacterViewComponent implements OnInit {

  public character$: Observable<any>;

  constructor(private route: ActivatedRoute, private api: RickandmortyapiService, private location: Location) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.character$ = this.api.getCharacter(params['id'])
      }
    });
  }

  public navigateBack(){
    this.location.back()
  }
}
