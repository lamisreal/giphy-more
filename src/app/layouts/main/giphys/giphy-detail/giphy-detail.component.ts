import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Giphy, GiphyParam } from "src/app/core/models/giphys/giphys.model";
import { ApiService } from "src/app/core/services/call-api.service";
import { CheckNullOrUndefinedOrEmpty } from "src/app/core/utils/common-function";
import { renderGifDetail, renderGiphy } from "../giphys";

@Component({
  selector: "app-giphy-detail",
  templateUrl: "./giphy-detail.component.html",
  styleUrls: ["./giphy-detail.component.scss"]
})
export class GiphyDetailComponent implements OnInit {
  gifId: string = "";
  gifDetail: Giphy = new Giphy();
  gifs: Giphy[] = [];
  viewCount: string = "";
  checkCount: number = 0;
  keySearch: string = "";
  textOther: string = "trending";

  constructor(
    private _activatedRoute: ActivatedRoute,
    private callApi: ApiService,
    private router: Router,
  ) {
    _activatedRoute.queryParams.subscribe((params: any) => {
      if (params.q) {
        this.gifId = params.q;
      } else {
        this.router.navigate(["page-not-found"]);
      }
    });

    this.keySearch = localStorage.getItem("key") || "";
  }

  ngOnInit(): void {
    if (this.checkCount === 1) {
      this.checkCount = 0;
      window.location.reload();
    }
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add "implements OnInit" to the class.
    this.callAPIGetDetail();
    this.callAPIGetViewCount();
    this.callAPIGetAllGifs();
  }

  seeDetail(id: string) {
    this.checkCount = 1;
    this.router.navigate(["detail"],
      { queryParams: { q: id } });

    setTimeout(() => {
      this.ngOnInit();
    }, 500);
  }

  back() {
    this.router.navigate(["/"]);
  }

  callAPIGetDetail() {
    this.callApi.getDetailItemGifs(this.gifId).subscribe(response => {
      if (!CheckNullOrUndefinedOrEmpty(response)) {
        this.gifDetail = renderGifDetail(response.data);
      }
    })
  }

  callAPIGetViewCount() {
    this.callApi.getViewCountGif(this.gifId).subscribe(response => {
      if (!CheckNullOrUndefinedOrEmpty(response)) {
        this.viewCount = response.viewCount.toLocaleString();
      }
    })
  }

  callAPIGetAllGifs() {
    this.gifs = [];
    localStorage.removeItem("key");

    if (this.keySearch) {
      this.textOther = "search";
      const param: GiphyParam = {
        query: this.keySearch,
        limit: 30,
      }
      this.callApi.getSearchItemGifs(param).subscribe((response: any) => {
        if (!CheckNullOrUndefinedOrEmpty(response.data) && response.data.length > 0) {
          this.gifs = renderGiphy(response.data);
        }
      });
    } else {
      const param: GiphyParam = {
        limit: 30,
      }
      this.callApi.getAllTrendingGifs(param).subscribe((response: any) => {
        if (!CheckNullOrUndefinedOrEmpty(response.data) && response.data.length > 0) {
          this.gifs = renderGiphy(response.data);
        }
      });
    }

  }

}
