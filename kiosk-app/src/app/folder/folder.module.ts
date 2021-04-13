import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {

  trustedVideoUrl: SafeResourceUrl;
  array_of_objects = "https://www.youtube.com/watch?v=GuMsRWqPc2k";


    constructor(public navCtrl: NavController,
                private domSanitizer: DomSanitizer) {}

    ionViewWillEnter(): void {    
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.array_of_objects);      
    }  
    
}
