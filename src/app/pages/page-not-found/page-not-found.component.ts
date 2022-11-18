import { Component, OnInit } from '@angular/core';

import { GifService } from '../../services/gif.service';

import { Observable } from 'rxjs';

import { GifModel } from '../../models/gif.model';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  gif$?: Observable<GifModel>;
  link: string | undefined;

  constructor(private gifService: GifService) {}

  ngOnInit(): void {
    this.gif$ = this.gifService.getGif();
    // this.link = this.gif$?
  }

}
