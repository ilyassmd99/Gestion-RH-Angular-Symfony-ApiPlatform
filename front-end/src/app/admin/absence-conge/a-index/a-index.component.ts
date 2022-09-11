import { Component, OnInit } from '@angular/core';
import { AbsenceCongeService } from 'src/app/_services/absence-conge.service';
import { AbsenceConges } from 'src/model/AbsenceConges';

@Component({
  selector: 'app-a-index',
  templateUrl: './a-index.component.html',
  styleUrls: ['./a-index.component.css']
})
export class AIndexComponent implements OnInit {

  abconges!: AbsenceConges[];
  abconge!: AbsenceConges;
  constructor(public absenceCongeService: AbsenceCongeService) { }

  ngOnInit(): void {
    this.getAll();
      }
  getAll(){
    this.absenceCongeService.getAllAbsenceConges().subscribe(
      response => {
        this.absenceCongeService.list = response["hydra:member"]
      }
    )
  }

  deleteAbsenceConge(ab:AbsenceConges){
    this.absenceCongeService.deleteAbsenceConge(ab).subscribe(
      data => {
        console.log(data);
        this.getAll();
      },
      error => console.log(error)
    );
  }

}
