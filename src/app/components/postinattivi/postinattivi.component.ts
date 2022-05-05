import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { recupera } from 'src/app/service/post.service';

@Component({
  selector: 'app-postinattivi',
  templateUrl: './postinattivi.component.html',
  styleUrls: ['./postinattivi.component.scss']
})
export class PostinattiviComponent implements OnInit {
    posts!: Post[];

  constructor() {
    recupera().then((postRecuperati) => {
        this.posts =postRecuperati;
    })
  }

  ngOnInit(): void {
  }

}
