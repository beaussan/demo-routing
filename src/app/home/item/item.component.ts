import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  numId$: Observable<string>;

  itemId: string;

  constructor(
      private readonly route: ActivatedRoute,
  ) {
    this.itemId = route.snapshot.paramMap.get('itemId');
    this.numId$ = this.route.paramMap.pipe(
        map(routeMap => routeMap.get('itemId')),
    )
  }

  ngOnInit(): void {
  }

}
