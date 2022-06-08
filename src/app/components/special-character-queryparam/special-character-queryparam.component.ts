import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-special-character-queryparam',
  templateUrl: './special-character-queryparam.component.html',
  styleUrls: ['./special-character-queryparam.component.css']
})
export class SpecialCharacterQueryparamComponent implements OnInit {
  public paramValue: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramValue = this.activatedRoute.snapshot.queryParams['id'];
  }

}
