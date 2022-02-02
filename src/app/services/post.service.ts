import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post.model';
import { Email } from '../models/Email.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

getPosts() {
  return this.http.get<Post[]>('http://localhost:3000/posts');
}
novoPost(post: Post) {
   this.http.post('http://localhost:3000/posts', post).subscribe(data => {console.log(data)})
}
contato(email: Email){
  this.http.post('http://localhost:8080/send', email).subscribe(data=>{console.log("ok!")});
}

}
