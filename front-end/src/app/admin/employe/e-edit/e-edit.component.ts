import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IEmploye } from 'src/app/_interfaces/employe';
import { EmployeService } from 'src/app/_services/employe.service';
import { Employes } from 'src/model/Employes';

@Component({
  selector: 'app-e-edit',
  templateUrl: './e-edit.component.html',
  styleUrls: ['./e-edit.component.css']
})
export class EEditComponent implements OnInit {

  /*@Input() employe: Employes
 /* employe: IEmploye = {
    id: 0,
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    dateNaissance: '',
    telephone: '',
    sexe: '',
    dateEmbauche: '',
    numImmatriculation: '',
    salaire: 0,
    deppartement: '',
    poste: '',
  }*/
  employe: Employes = new Employes();
  submitted = false;
  id!: number;
  constructor(
    private activated: ActivatedRoute,
    private employeService: EmployeService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params['id'];
    this.employeService.getEmploye(this.id).subscribe(
      data => {console.log(data),
      this.employe = data
      }, error => console.log(error));
      }

  onSubmit(): void{
    this.submitted = true;
    this.edit();
  }
  edit(){
    this.employeService.editEmploye(this.id, this.employe).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.employe = new Employes();
    this.gotoList();
  }
  gotoList(){
    this.router.navigate(['/admin/employe'])
  }

}
