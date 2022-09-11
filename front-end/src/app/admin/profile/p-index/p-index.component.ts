import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/_services/profile.service';
import { Admins } from 'src/model/admin';

@Component({
  selector: 'app-p-index',
  templateUrl: './p-index.component.html',
  styleUrls: ['./p-index.component.css']
})
export class PIndexComponent implements OnInit {

  admin = new Admins();
  id : number = 0;
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
   // this.getAdmin();
    this.route.paramMap.subscribe(res=>{
      this.id = +(res.get('id') ?? "0");
      this.profileService.getAdmin().subscribe(a =>{
        this.admin = a;
      })
    })
  }
  onSubmit(){}

  /*getAdmin(){
    this.profileService.getAdmin().subscribe(
      response => {
        this.profileService.list = response["hydra:member"];
      }
    )
  }*/

}
