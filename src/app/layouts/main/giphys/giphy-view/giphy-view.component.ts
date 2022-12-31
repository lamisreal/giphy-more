import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/call-api.service';
import * as AgModules from '@ag-grid-enterprise/all-modules';
import * as Utils from '../../../../core/utils/common-function';
import * as GiphyUtils from 'src/app/core/utils/giphys/giphy.utils';

@Component({
  selector: 'app-giphy-view',
  templateUrl: './giphy-view.component.html',
  styleUrls: ['./giphy-view.component.css']
})
export class GiphyViewComponent {

  modules = AgModules.AllModules;
  columnDefs = GiphyUtils.giphyColumnDefs;
  defaultColDef = GiphyUtils.giphyDefaultColDef;
  gridOptions: AgModules.GridOptions = Utils.gridOptions;
  rowData = [];

  constructor(private callApi: ApiService) { }

  ngOnInit(): void {
    console.log('aaaaaa');
    
    this.callApi.getAllTrendingGifs().subscribe(data => {
      console.log('data', data);
    })
  }

  onGridReady(event: any) { }
  onCellClicked(event: any) { }
}
