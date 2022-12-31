import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Giphy } from 'src/app/core/models/giphys/giphys.model';
import { ApiService } from 'src/app/core/services/call-api.service';
import { CheckNullOrUndefinedOrEmpty } from 'src/app/core/utils/common-function';
import { renderGifDetail } from '../giphys';

@Component({
  selector: 'app-giphy-detail',
  templateUrl: './giphy-detail.component.html',
  styleUrls: ['./giphy-detail.component.css']
})
export class GiphyDetailComponent implements OnInit {
  gifId: string = '';
  gifDetail: Giphy = new Giphy();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private callApi: ApiService,
    ) {
      _activatedRoute.queryParams.subscribe((params: any) => {
        this.gifId = params.q;
      });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.callAPIGetDetail();
  }
  
  callAPIGetDetail(){
    this.callApi.getDetailItemGifs(this.gifId).subscribe(response =>{
      if(!CheckNullOrUndefinedOrEmpty(response)){
        this.gifDetail = renderGifDetail(response.data);
      }
    })
  }

}
