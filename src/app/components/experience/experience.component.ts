import { Component, OnInit } from '@angular/core';
import { experience } from './experience-placeholder';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {
  expcontent: { title: string, img: string, description: string }[];

  constructor() { }

  ngOnInit(): void {
    this.expcontent = experience;
  }

}
