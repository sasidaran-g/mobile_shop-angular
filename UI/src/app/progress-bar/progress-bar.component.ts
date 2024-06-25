import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnChanges {
  @Input() status: string | undefined;
  progress: number = 0;
  progressColor: string  = '';

  constructor() {}

  ngOnChanges(): void {
    this.updateProgress();
  }
  updateProgress(): void {
    if (this.status === 'processing') {
      this.progress = 50;
      this.status = 'Out for Delivary';
      this.progressColor = 'orange';
    } else if (this.status === 'delivered') {
      this.progress = 100;
      this.status = 'Delivered';
      this.progressColor = 'green';
    } else if (this.status === 'new') {
      this.progress = 30;
      this.status = 'order Placed';
      this.progressColor = 'blue';
    } else if(this.status === 'cancelled') {
      this.progress = 0;
      this.status = 'Cancelled';
      this.progressColor = 'red';
    }
  }
}
