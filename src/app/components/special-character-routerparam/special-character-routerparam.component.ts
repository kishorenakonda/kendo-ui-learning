import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-special-character-routerparam',
  templateUrl: './special-character-routerparam.component.html',
  styleUrls: ['./special-character-routerparam.component.css']
})
export class SpecialCharacterRouterparamComponent implements OnInit {
  public paramValue: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramValue = this.activatedRoute.snapshot.params['id'];
    console.log("param", this.paramValue);
  }

}
