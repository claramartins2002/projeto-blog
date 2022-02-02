import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/Email.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

email: Email = new Email;
emailEnviado = false;
  constructor( private service: PostService) { }

  ngOnInit(): void {
  }
  enviar() {
    this.service.contato(this.email);
    this.emailEnviado = true;
    this.email = new Email;
  }
  
}
