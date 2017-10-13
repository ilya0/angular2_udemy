import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
authors;
  constructor(author:AuthorsService) {
    this.authors = author.getAuthors();
   }

  ngOnInit() {
  }

}
