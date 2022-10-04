import { Component, Input, OnInit } from '@angular/core';
import { Organization } from 'src/app/interfaces/organization';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() organization!: Organization;
  constructor() { }

  ngOnInit(): void {
  }

}
