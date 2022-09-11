import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbsenceCongeService } from 'src/app/_services/absence-conge.service';
import { AbsenceConges } from 'src/model/AbsenceConges';

@Component({
  selector: 'app-a-edit',
  templateUrl: './a-edit.component.html',
  styleUrls: ['./a-edit.component.css']
})
export class AEditComponent implements OnInit {

 /* absenceConge: IAbsenceConge ={
    id : 0,
  dateDebut : '',
  jour : '',
  duree : 0,
  }*/
  employe: AbsenceConges = new AbsenceConges();
  submitted = false;
  id!: number;
  constructor(
    private activated: ActivatedRoute,
    private employeService: AbsenceCongeService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params['id'];
    this.employeService.getAbsenceConge(this.id).subscribe(
      data => {console.log(data),
      this.employe = data
      }, error => console.log(error));
      }

  onSubmit(): void{
    this.submitted = true;
    this.edit();
  }
  edit(){
    this.employeService.editAbsenceConge(this.id, this.employe).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.employe = new AbsenceConges();
    this.gotoList();
  }
  gotoList(){
    this.router.navigate(['/admin/absence-conge'])
  }

}
