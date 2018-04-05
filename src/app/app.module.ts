// Main Libraries Imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

// Application Components Modules
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CustomMaterialDesignModuleModule } from './custom-material-design-module/custom-material-design-module.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule, routedComponents } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    HeaderComponent,
    FooterComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomMaterialDesignModuleModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
