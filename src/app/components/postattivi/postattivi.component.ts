import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import {recupera} from 'src/app/service/post.service';

@Component({
  selector: 'app-postattivi',
  templateUrl: './postattivi.component.html',
  styleUrls: ['./postattivi.component.scss']
})
export class PostattiviComponent implements OnInit {
    posts!: Post[];


  constructor() {
    recupera().then((postRecuperati) => {
        this.posts =postRecuperati;
    })
   }

  ngOnInit(): void {
  }

}
