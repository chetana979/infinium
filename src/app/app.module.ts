import { ApiService } from './services/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel'; 
import { NgCircleProgressModule } from 'ng-circle-progress';
import { GrowthMatrixComponent } from './growth-matrix/growth-matrix.component';
import { ResearchServicesComponent } from './research-services/research-services.component';
import { FdiSolutionsComponent } from './fdi-solutions/fdi-solutions.component';
import { ExclusiveServicesComponent } from './exclusive-services/exclusive-services.component';
import { SurveyReportsComponent } from './survey-reports/survey-reports.component';
import { PortfolioReportsComponent } from './portfolio-reports/portfolio-reports.component';
import { InfographicsComponent } from './infographics/infographics.component';
import { IndustriesComponent } from './industries/industries.component';
import { CountryReportsComponent } from './country-reports/country-reports.component';
import { HomeReadMoreComponent } from './home-read-more/home-read-more.component';
import { UniPortalComponent } from './uni-portal/uni-portal.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PressReleasesComponent } from './press-releases/press-releases.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { RefundCancellationPolicyComponent } from './refund-cancellation-policy/refund-cancellation-policy.component';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AutomotiveComponent } from './industri/automotive/automotive.component';
import { ChemicalComponent } from './industri/chemical/chemical.component';
import { ConsumerComponent } from './industri/consumer/consumer.component';
import { EnergyComponent } from './industri/energy/energy.component';
import { FoodComponent } from './industri/food/food.component';
import { HealthcareComponent } from './industri/healthcare/healthcare.component';
import { ElectronicsComponent } from './industri/electronics/electronics.component';
import { AgricultureComponent } from './industri/agriculture/agriculture.component';
import { IndiaComponent } from './country_box/india/india.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PressRReadComponent } from './press-r-read/press-r-read.component';
import { SecondRdPageComponent } from './second-rd-page/second-rd-page.component';
import { SecondFormComponent } from './second-form/second-form.component';
import { ThirdRdComponent } from './third-rd/third-rd.component';
import { ThirdFormComponent } from './third-form/third-form.component';
import { ReadInfographicsComponent } from './read-infographics/read-infographics.component';
import { InfograpgFormComponent } from './infograpg-form/infograpg-form.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GrowthMatrixComponent,
    ResearchServicesComponent,
    FdiSolutionsComponent,
    ExclusiveServicesComponent,
    SurveyReportsComponent,
    PortfolioReportsComponent,
    InfographicsComponent,
    IndustriesComponent,
    CountryReportsComponent,
    HomeReadMoreComponent,
    UniPortalComponent,
    ContactUsComponent,
    PressReleasesComponent,
    PrivacyPolicyComponent,
    ArticlePageComponent,
    TermsConditionComponent,
    RefundCancellationPolicyComponent,
    FormComponent,
    AutomotiveComponent,
    ChemicalComponent,
    ConsumerComponent,
    EnergyComponent,
    FoodComponent,
    HealthcareComponent,
    ElectronicsComponent,
    AgricultureComponent,
    IndiaComponent,
    ThankyouComponent,
    PressRReadComponent,
    SecondRdPageComponent,
    SecondFormComponent,
    ThirdRdComponent,
    ThirdFormComponent,
    ReadInfographicsComponent,
    InfograpgFormComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    CarouselModule,
    OwlModule,
    NgCircleProgressModule.forRoot()
  ],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy},ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
