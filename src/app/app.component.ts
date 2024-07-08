import { Component, OnInit } from "@angular/core";
import { ThemeService } from "./services/theme.service";
import { SintolLibDynamicComponentService, SintolLibModalComponent } from "dynamic-rendering";
import { ModalComponent } from "./components/modal/modal.component";

@Component({
     selector: "app-root",
     templateUrl: "./app.component.html",
     styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
     title = "tasks-ang";
     constructor(public themeService: ThemeService, private dynamicComponentSrv: SintolLibDynamicComponentService) {}

     ngOnInit(): void {}

     changeTheme() {
          this.themeService.changeTheme();
     }

     public async openExternalLibModal(): Promise<void> {
          this.dynamicComponentSrv.closeAll()
          const onOpen = () => console.log('Modal opened!')
          const onClose = () => console.log('Modal closed!')
          const confirmed = await this.dynamicComponentSrv.openConfirmModal(
               SintolLibModalComponent,
               {size: 'fullscreen', title: 'Sintol lib modal'}, 
               onOpen, 
               onClose
          )
          console.log('Confirmed? - ', confirmed)
     }

     public async openInternalLibModal(): Promise<void> {
          const onOpen = () => console.log('Modal opened!')
          const onClose = () => console.log('Modal closed!')
          const confirmed = await this.dynamicComponentSrv.openConfirmModal(
               ModalComponent,
               {}, 
               onOpen, 
               onClose
          )
          console.log('Confirmed? - ', confirmed)
     }
}
