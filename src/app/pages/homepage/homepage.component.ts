import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PathService } from 'src/app/services/path.service';
import { PathNames } from 'src/app/shared/enums';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  currentPath: string = this.pathService.currentPath;
  constructor(public pathService: PathService) {
    this.pathService.setCurrentPath();
  }

  ngOnInit(): void {
    const path = { pathName: PathNames.HOME, url: this.currentPath };
    this.pathService.addPath(path);
  }
  ngOnDestroy(): void {
    this.pathService.unsubscribe();
  }
}
