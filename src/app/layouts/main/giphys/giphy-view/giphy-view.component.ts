import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/core/services/call-api.service';
import * as AgModules from '@ag-grid-enterprise/all-modules';
import * as Utils from '../../../../core/utils/common-function';
import * as Models from '../../../../core/models/giphys/giphys.model';
import * as GiphyUtils from 'src/app/core/utils/giphys/giphy.utils';
import { GridApi, GridSizeChangedEvent } from 'ag-grid-community';
import { Router } from '@angular/router';
import { renderGiphy } from '../giphys';
import { GifImageRenderComponent } from '../_share/gif-image-render/gif-image-render.component';
import { AvatarImageRenderComponent } from '../_share/avatar-image-render/avatar-image-render.component';
import { GiphyType } from 'src/app/core/enums/giphys/giphy.enum';

@Component({
  selector: 'app-giphy-view',
  templateUrl: './giphy-view.component.html',
  styleUrls: ['./giphy-view.component.scss']
})
export class GiphyViewComponent {

  modules: any = AgModules.AllModules;
  columnDefs: any = GiphyUtils.giphyColumnDefs;
  defaultColDef: any = GiphyUtils.giphyDefaultColDef;
  gridOptions: any = Utils.gridOptions;
  rowData: any = [];
  giphySearch: string = '';

  gridApi: GridApi;
  paramsData: AgModules.IGetRowsParams;
  loadingTemplate: any;
  emptyTemplate: any;
  frameworkComponents: any;
  currentPage: number = 1;
  limit: number = 10;
  category: string = 'Trending...';

  constructor(
    private callApi: ApiService,
    private router: Router,
  ) {
    this.loadingTemplate = `<span class="ag-overlay-loading-center">Loading...</span>`;
    this.emptyTemplate = `<span class="ag-overlay-loading-center">Empty</span>`;

    this.frameworkComponents = {
      gifImageRender: GifImageRenderComponent,
      avatarImageRender: AvatarImageRenderComponent,
    };

  }

  ngOnInit(): void { }

  onRowDoubleClicked(data: Models.Giphy) {
    this.currentPage = this.gridApi.paginationGetCurrentPage() + 1;

    this.router.navigate(["detail"],
      { queryParams: { q: data.id } });
  }

  onGridSizeChanged(params: GridSizeChangedEvent) {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
    this.getData(params.api, GiphyType.TRENDING);
  }

  getData(api: GridApi, type: GiphyType) {
    this.gridApi = api;
    let dataSource = {
      getRows: (params: AgModules.IGetRowsParams) => {
        const page = this.gridApi.paginationGetCurrentPage() + 1;
        this.currentPage = page;
        this.paramsData = params;

        if (type === GiphyType.TRENDING) {
          this.category = "Treding..."
          const param: Models.GiphyParam = {
            limit: this.limit,
            offset: this.limit * page
          }

          this.callApi.getAllTrendingGifs(param).subscribe((response: any) => {
            if (!Utils.CheckNullOrUndefinedOrEmpty(response.data) && response.data.length > 0) {
              let dataArr = renderGiphy(response.data);
              return params.successCallback(dataArr, response.pagination.total_count);
            }
          });
        }

        if (type === GiphyType.SEARCH) {
          this.category = "Search..."
          const param: Models.GiphyParam = {
            query: this.giphySearch,
            limit: this.limit,
            offset: this.limit * page
          }

          localStorage.setItem('key', this.giphySearch);

          this.callApi.getSearchItemGifs(param).subscribe((response: any) => {
            if (!Utils.CheckNullOrUndefinedOrEmpty(response.data) && response.data.length > 0) {
              let dataArr = renderGiphy(response.data);
              return params.successCallback(dataArr, response.pagination.total_count);
            }
          });
        }

      },
    };
    this.gridApi.setDatasource(dataSource);
  }

  onClickSearchGif() {
    this.getData(this.gridApi, GiphyType.SEARCH);
  }

  refeshToTreding() {
    if (Utils.CheckNullOrUndefinedOrEmpty(this.giphySearch)) {
      this.getData(this.gridApi, GiphyType.TRENDING);
    }
  }
}
