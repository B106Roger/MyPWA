import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/service/dynamic-script-loader.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {
  GAME_URL = "https://gamelab.gd888.cc/";
  GAME_NAME = "gamelab-fortunes88";
  BEARER = "test006";
  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.loadScripts();
  }
  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('js1', 'library', 'engine', 'content').then(data => {
      console.log('successfully load library');
    }).catch(error => console.log(error));


  }
}
