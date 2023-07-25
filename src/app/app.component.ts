import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
  activeIndex = 1;

  setActive(index: number): void{
    this.activeIndex = index;
    console.log(this.activeIndex)
  }
  
}
