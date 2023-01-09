import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  data;

  constructor(private http: HttpClient) {
    this.getDataFromHttp();
  }

  getDataFromHttp() {
    this.getData().subscribe((res) => {
      this.data = res;
    });
  }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
