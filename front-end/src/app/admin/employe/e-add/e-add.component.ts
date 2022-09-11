import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IEmploye } from 'src/app/_interfaces/employe';
import { EmployeService } from 'src/app/_services/employe.service';
import { TokenService } from 'src/app/_services/token.service';
import { Employes } from 'src/model/Employes';

@Component({
  selector: 'app-e-add',
  templateUrl: './e-add.component.html',
  styleUrls: ['./e-add.component.css']
})
export class EAddComponent implements OnInit {
  /*employe: IEmploye ={
    id !: 0,
    nom !: '',
    prenom!: '',
    adresse!: '',
    email!: '',
    dateNaissance!: '',
    telephone!: '',
    sexe!: '',
    dateEmbauche!: '',
    numImmatriculation!: '',
    salaire!: 0,
    deppartement!: '',
    poste!: ''
  }*/
  employe: Employes = new Employes();
  submitted = false;
  constructor(private es: EmployeService,private ts: TokenService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }
  newEmploye():void{
    this.submitted = false;
    this.employe = new Employes();
  }
  save(){
    this.es.addEmploye(this.employe).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.employe = new Employes();
  }


  /*InfoForm(){
    this.es.formData = this.({
      id: null,
    nom: ['',[Validators.required]],
    prenom: ['',[Validators.required]],
    adresse: ['',[Validators.required]],
    email: ['',[Validators.required]],
    dateNaissance: ['',[Validators.required]],
    telephone: ['',[Validators.required]],
    sexe:['',[Validators.required]],
    dateEmbauche: ['',[Validators.required]],
    numImmatriculation: ['',[Validators.required]],
    salaire: ['',[Validators.required]],
    deppartement: ['',[Validators.required]],
    poste: ['',[Validators.required]],
    });
  }*/
}
