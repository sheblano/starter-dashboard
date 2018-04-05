import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [{
    path: 'home',
    component: HomeComponent,
    data: { animation: 'homeAnimation' }
  },
  {
    path: 'offer',
    component: OfferComponent,
    data: { animation: 'offerAnimation' }
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { animation: 'otherAnimation' }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { animation: 'notfoundAnimation' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  // declarations: []
})
export class AppRoutingModule { }
export const routedComponents = [HomeComponent, OfferComponent, NotFoundComponent];
