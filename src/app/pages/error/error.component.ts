import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  errorTitle: string | undefined;
  errorMessage: string | undefined;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorTitle = this.activatedRoute.snapshot.data['title'];
    this.errorMessage = this.activatedRoute.snapshot.data['message'];
    console.log('data',this.activatedRoute.snapshot.data);
  }

}
