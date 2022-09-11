import { Component } from '@angular/core';
import { TokenService } from './_services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rhgestion';

  constructor(private tokenService: TokenService){}
  logout(){
    this.tokenService.cleartoken()
  }
}
