import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'first-angular-task';
  description = 'This is a description';
  showDescription = false;
  catNames = ['Pūciņa', 'Muris', 'Sniedziņš'];
  count = 0;

  ngOnInit(): void {
    console.log('Komponente izveidota');
  }
  sayHello(): void {
    console.log('Hello');
  }

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }

  addCount(): void {
    this.count++;
  }
  removeCount(): void {
    this.count--;
  }
}
