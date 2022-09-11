import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from 'src/app/_services/employe.service';
import { Employes } from 'src/model/Employes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  employe = new Employes();
  id : number = 0;

  constructor(
    private route: ActivatedRoute,
    private es: EmployeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>{
      this.id = +(res.get('id')?? "0");
      this.es.getEmploye(this.id).subscribe(e =>{
        this.employe = e;
      })
    })
  }

}
