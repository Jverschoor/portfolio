import { Component, OnInit, AfterViewInit } from '@angular/core';
import { experience } from './experience-placeholder';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass'],
  host: {
    '(window:resize)': 'init($event)',
    '(window:scroll)': 'checkPosition()'
  }
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  expcontent: { title: string, img: string, description: string }[];
  hiddenElements;
  windowHeight;
  initCalls = 0;

  constructor() { }

  checkPosition(): void {
    for (var i = 0; i < this.hiddenElements.length; i++) {
      var element = this.hiddenElements[i];
      var positionFromTop = this.hiddenElements[i].getBoundingClientRect().top;
      console.log(positionFromTop - this.hiddenElements);
      if (positionFromTop - this.windowHeight <= 0) {
        console.log("element found!");
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    }
  }

  init() {
    this.hiddenElements = document.querySelectorAll(".hidden");
    this.windowHeight = window.innerHeight;
  }

  ngOnInit(): void {
    this.expcontent = experience;
  }

  ngAfterViewInit(): void {
    this.init();
    this.checkPosition();
  }
}
