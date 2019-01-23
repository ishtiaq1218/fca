import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  ngAfterViewInit(): void {

    // // using context
    // $('.ui.sidebar')
    //   .sidebar({
    //     context: $('.bottom.segment')
    //   })
    //   .sidebar('attach events', '.menu .item')
    //   ;

    $('.grid-stack').gridstack();
  }
}
