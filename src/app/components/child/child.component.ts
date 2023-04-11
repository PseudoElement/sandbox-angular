import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathService } from 'src/app/services/path.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private pathService: PathService) {
    this.pathService.setCurrentPath();
  }
  ngOnInit() {}
  ngOnDestroy(): void {
    this.pathService.unsubscribe();
  }
  onClick() {
    this.router.navigate(['']);
  }
}
