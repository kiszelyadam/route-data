import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  name?:string;
  constructor(
    private readonly activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
      console.log(this.activatedRoute.snapshot.data?.['first']);
    }
}
