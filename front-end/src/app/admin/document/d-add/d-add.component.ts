import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/_services/document.service';
import { TokenService } from 'src/app/_services/token.service';
import { Documents } from 'src/model/Documents';

@Component({
  selector: 'app-d-add',
  templateUrl: './d-add.component.html',
  styleUrls: ['./d-add.component.css']
})
export class DAddComponent implements OnInit {

  document: Documents = new Documents();
  submitted = false;
  id!:number;
  constructor(
    private ds: DocumentService,
    private ts: TokenService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }
  onSubmit(){
    this.submitted = false;
    this.save();
  }
  newDocument(): void{
    this.submitted = false;
    this.document = new Documents();
  }

  save(){
    this.ds.addDocument(this.document).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.document= new Documents();
    this.gotoList();
  }
  gotoList(){
    this.router.navigate(['/admin/employe'])
  }

}
