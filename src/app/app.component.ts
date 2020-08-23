import { Component, OnInit } from '@angular/core';
import { VariablesService } from './services/vaiables/variables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'argegra-mexico';

  constructor(public variables: VariablesService){
    variables.loading = true;
    setTimeout(() => {
      variables.loading = false
    }, 1000);
  }

  
}
