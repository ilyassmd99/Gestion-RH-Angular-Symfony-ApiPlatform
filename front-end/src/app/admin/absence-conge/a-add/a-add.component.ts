import { Component, OnInit } from '@angular/core';
import { IAbsenceConge } from 'src/app/_interfaces/absence-conge';
import { AbsenceCongeService } from 'src/app/_services/absence-conge.service';
import { TokenService } from 'src/app/_services/token.service';
import { AbsenceConges } from 'src/model/AbsenceConges';

@Component({
  selector: 'app-a-add',
  templateUrl: './a-add.component.html',
  styleUrls: ['./a-add.component.css']
})
export class AAddComponent implements OnInit {
  /*absenceConge: IAbsenceConge ={
    id! : 0,
    dateDebut! : '',
    jour! : '',
    duree! : 0,
  }*/
  absenceconge: AbsenceConges = new AbsenceConges();
  submitted = false;

  constructor(
     private absenceCongeService: AbsenceCongeService,
     private ts: TokenService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = false;
    this.save();
  }
  newAbsenceConge():void{
    this.submitted = false;
    this.absenceconge = new AbsenceConges();
  }
  save(){
    this.absenceCongeService.addAbsenceConge(this.absenceconge).subscribe(
      data => console.log(data),
       error => console.log(error)
    );
    this.absenceconge = new AbsenceConges();
  }


}
