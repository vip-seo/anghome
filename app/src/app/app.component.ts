import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'app';

  public showId (idx: number):void  {
    console.log(idx);
  }

}
