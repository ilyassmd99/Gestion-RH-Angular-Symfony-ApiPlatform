import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/_services/document.service';
import { Documents } from 'src/model/Documents';

@Component({
  selector: 'app-d-index',
  templateUrl: './d-index.component.html',
  styleUrls: ['./d-index.component.css']
})
export class DIndexComponent implements OnInit {

  documents!: Documents[];
  document!: Documents;
  constructor(public ds: DocumentService ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.ds.getAllDocuments().subscribe(
      response =>{
        this.ds.list = response["hydra:member"];
      }
    )
  }
  deleteDocument(doc: Documents){
    this.ds.deleteDocument(doc).subscribe(
      data => {
        console.log(data);
        this.getAll();
    },error  => console.log(error)
    )
  }


}
