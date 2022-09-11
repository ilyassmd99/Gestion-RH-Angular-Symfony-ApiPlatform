import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/_services/employe.service';
import { Employes } from 'src/model/Employes';

@Component({
  selector: 'app-e-index',
  templateUrl: './e-index.component.html',
  styleUrls: ['./e-index.component.css']
})
export class EIndexComponent implements OnInit {

  employes!: Employes[];
  employe!: Employes;
  constructor(public employeService: EmployeService ) { }

  ngOnInit(): void {
   this.getAll();

  }
  onSubmit(){

  }
  getAll(){
    this.employeService.getAllEmployes().subscribe(
      response =>{
      this.employeService.list = response["hydra:member"];
      })}

  deleteEmploye(employe: Employes){
    this.employeService.deleteEmploye(employe).subscribe(
      data => {
          console.log(data);
          this.getAll();
      },error  => console.log(error)

      );}

  }

