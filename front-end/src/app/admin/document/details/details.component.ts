import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from 'src/app/_services/document.service';
import { Documents } from 'src/model/Documents';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  document = new Documents();
  id : number = 0;
  constructor(
    private route: ActivatedRoute,
    private ds: DocumentService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>{
      this.id = +(res.get('id')?? "0");
      this.ds.getDocument(this.id).subscribe(e=>{
        this.document = e;
      })
    })
  }

}
