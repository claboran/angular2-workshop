import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  handleTitleEvent(mouseEvent: MouseEvent): void {
    console.log(`Event - X: ${mouseEvent.offsetX}, Y: ${mouseEvent.offsetY}, MouseKey: ${mouseEvent.buttons}`);
  }
}
