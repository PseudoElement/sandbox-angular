import { Injectable } from "@angular/core";
import { PathNames } from "../shared/enums/pathNames";
import { NavigationEnd, Router } from "@angular/router";
import { filter, Subscription } from "rxjs";

interface OnePath {
     url: string;
     pathName: PathNames;
}

type PathData = Array<OnePath>;

@Injectable({
     providedIn: "root",
})
export class PathService {
     subscription: Subscription;
     data: PathData = [];
     currentPath: string;
     constructor(private router: Router) {}
     addPath(path: OnePath) {
          this.data = [...this.data, path];
     }
     setCurrentPath() {
          this.subscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((res: any) => {
               // console.log(res.url);
               this.currentPath = res.url;
          });
     }
     unsubscribe() {
          this.subscription.unsubscribe();
     }
}
