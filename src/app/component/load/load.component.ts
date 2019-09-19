import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/service/dynamic-script-loader.service';
import { DomSanitizer } from '@angular/platform-browser';

const PARENT_SHORT_NAME = 'beanstalk';
const PARENT_GAME_URL   = 'https://dev-slot-mario.gd888.cc/gamelab/';
const PARENT_GAME_NAME  = 'gamelab-';
const PARENT_USER       = 'test005';


@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit, AfterViewInit {
  count = 0;
  msg1 = '';
  msg2 = '';
  msg3 = '';
  msg4 = '';
  msg5 = '';
  msg6 = '';
  msg7 = '';
  msg8 = '';
  msg9 = '';

  ngOnInit() {
    this.update();
    setTimeout(() => {
      this.update();
    }, 300);
  }
  ngAfterViewInit() {
  }
  update() {
    this.msg1 = `window.innerHeight: ${window.innerHeight} px`;
    this.msg2 = `window.innerWidth: ${window.innerWidth} px`;
    this.msg3 = `window.outerHeight: ${window.outerHeight} px`;
    this.msg4 = `window.outerWidth: ${window.outerWidth} px`;
    this.msg5 = `screen.height: ${screen.height} px`;
    this.msg6 = `screen.width: ${screen.width} px`;
    this.msg7 = `clientHeight: ${document.documentElement.clientHeight} px`;
    this.msg8 = `clientWidth: ${document.documentElement.clientWidth} px`;
    this.meidaQuery();
  }
  updateWithAlert() {
    this.update();
    this.count++;
  }
  meidaQuery() {
    if (window.matchMedia(`screen and (height:${window.innerHeight}px)`)) {
      this.msg9 = 'media query is for window.innerHeight';
    } else if (window.matchMedia(`screen and (height:${screen.height}px)`)) {
      this.msg9 = 'media query is for screen.height';
    } else if (window.matchMedia(`screen and (height:${document.documentElement.clientHeight}px)`)) {
      this.msg9 = 'media query is for document.documentElement.clientHeight';
    }
  }

}
