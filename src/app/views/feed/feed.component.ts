import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
postagens: Post[];
novo: Post = new Post;
filterBy: string;
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.mostrarPostagens();
    

  }

  mostrarPostagens() {
    this.service.getPosts().subscribe((data : Post[])=> {this.postagens = data})
  }

  novaPostagem() {
this.service.novoPost(this.novo);
this.novo = new Post;
this.mostrarPostagens();
  }

}
