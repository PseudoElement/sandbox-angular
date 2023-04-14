import { Component, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { PathService } from "src/app/services/path.service";
import { PathNames } from "src/app/shared/enums";
import { decrement, increment } from "src/app/store/counter";
import { users as usersData } from "src/app/shared/constants/users";

@Component({
     selector: "app-homepage",
     templateUrl: "./homepage.component.html",
     styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit, OnDestroy {
     users = usersData;
     currentPath: string = this.pathService.currentPath;
     currentScroll: number;
     child: string = "child";
     constructor(public pathService: PathService, public store: Store, private myElement: ElementRef) {
          this.pathService.setCurrentPath();
          console.log(this.myElement.nativeElement);
          this.myElement.nativeElement.addEventListener("scroll", () => {
               this.currentScroll = window.scrollY;
               console.log(this.currentScroll);
          });
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
          if (this.currentPath === "/") {
          }
     }
     incrementCounter() {
          this.store.dispatch(increment());
     }
     decrementCounter() {
          this.store.dispatch(decrement());
     }
     onScroll(): void {}
}
