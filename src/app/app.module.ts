// Main Imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

// UI Components
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

// Modules
import { CustomMaterialDesignModuleModule } from './custom-material-design-module/custom-material-design-module.module';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomMaterialDesignModuleModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
