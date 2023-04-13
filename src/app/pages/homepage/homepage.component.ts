import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PathService } from 'src/app/services/path.service';
import { PathNames } from 'src/app/shared/enums';
import { decrement, increment } from 'src/app/store/counter';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  currentPath: string = this.pathService.currentPath;
  child: string = 'child';
  constructor(public pathService: PathService, public store: Store) {
    this.pathService.setCurrentPath();
  }

  ngOnInit(): void {
    const path = { pathName: PathNames.HOME, url: this.currentPath };
    this.pathService.addPath(path);
  }
  ngOnDestroy(): void {
    this.pathService.unsubscribe();
  }
  ngDoCheck() {
    this.currentPath = this.pathService.currentPath;
  }
  ngAfterContentChecked() {
    if (this.currentPath === '/') {
    }
  }
  incrementCounter() {
    this.store.dispatch(increment());
  }
  decrementCounter() {
    this.store.dispatch(decrement());
  }
}
