import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track-pacakage',
  templateUrl: './track-pacakage.component.html',
  styleUrls: ['./track-pacakage.component.scss'],
})
export class TrackPacakageComponent implements OnInit {
  status: string | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.status = params.status;
      console.log(this.status);
    });
  }
}
