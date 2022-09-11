import { HttpClient } from '@angular/common/http';
import { Component, InjectionToken, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { ICredential } from 'src/app/_interfaces/credential'
import { TokenService } from 'src/app/_services/token.service';
interface IToken{
  token: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: ICredential = {
    username: '',
    password: ''
  }
  constructor(
    private authServer: AuthService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form)
    this.authServer.login(this.form).subscribe(
      data => {
        console.log(data.token)
        this.tokenService.saveToken(data.token)
      },
      err => console.log(err)
    )
  }

}
