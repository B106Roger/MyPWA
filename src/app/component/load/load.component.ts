import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/service/dynamic-script-loader.service';
import { DomSanitizer } from '@angular/platform-browser';

var PARENT_SHORT_NAME = "beanstalk";
var PARENT_GAME_URL   = "https://dev-slot-mario.gd888.cc/gamelab/";
var PARENT_GAME_NAME  = "gamelab-";
var PARENT_USER       = "test005";


@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit, AfterViewInit {
  msg1 = '';
  msg2 = '';
  msg3 = '';
  msg4 = '';
  msg5 = '';
  msg6 = '';
  ngOnInit() {
    this.update();
  }
  ngAfterViewInit() {
    this.update();
  }
  update() {
    this.msg1 = `window.innerHeight: ${window.innerHeight} px`;
    this.msg2 = `window.innerWidth: ${window.innerWidth} px`;
    this.msg3 = `window.outerHeight: ${window.outerHeight} px`;
    this.msg4 = `window.outerWidth: ${window.outerWidth} px`;
    this.msg5 = `screen.height: ${screen.height} px`;
    this.msg6 = `screen.width: ${screen.width} px`;
  }
  updateWithAlert() {
    this.update();
    window.alert('update');
  }
  innerHeight() {
    this.msg2 = `window.innerHeight: ${window.innerHeight} px`;
  }
  innerWidth() {
    this.msg1 = `window.innerWidth: ${window.innerWidth} px`;
  }
  outerHeight() {
    this.msg2 = `window.outerHeight: ${window.outerHeight} px`;
  }
  outerWidth() {
    this.msg1 = `window.outerWidth: ${window.outerWidth} px`;
  }
  screenHeight() {
    this.msg2 = `screen.height: ${screen.height} px`;
  }
  screenWidth() {
    this.msg1 = `screen.width: ${screen.width} px`;
  }

}
