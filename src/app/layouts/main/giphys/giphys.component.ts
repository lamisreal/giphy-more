import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/call-api.service';

@Component({
  selector: 'app-giphys',
  templateUrl: './giphys.component.html',
  styleUrls: ['./giphys.component.css']
})
export class GiphysComponent {

  constructor(private callApi: ApiService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.callApi.getAllTrendingGifs().subscribe(data => {
      console.log('data', data);
    })
  }
}
