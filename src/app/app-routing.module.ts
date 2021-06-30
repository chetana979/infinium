import { FormComponent } from './form/form.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { RefundCancellationPolicyComponent } from './refund-cancellation-policy/refund-cancellation-policy.component';
import { UniPortalComponent } from './uni-portal/uni-portal.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PressReleasesComponent } from './press-releases/press-releases.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeReadMoreComponent } from './home-read-more/home-read-more.component';
import { CountryReportsComponent } from './country-reports/country-reports.component';
import { IndustriesComponent } from './industries/industries.component';
import { InfographicsComponent } from './infographics/infographics.component';
import { SurveyReportsComponent } from './survey-reports/survey-reports.component';
import { PortfolioReportsComponent } from './portfolio-reports/portfolio-reports.component';
import { ExclusiveServicesComponent } from './exclusive-services/exclusive-services.component';
import { FdiSolutionsComponent } from './fdi-solutions/fdi-solutions.component';
import { ResearchServicesComponent } from './research-services/research-services.component';
import { GrowthMatrixComponent } from './growth-matrix/growth-matrix.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomotiveComponent } from './industri/automotive/automotive.component';
import { ChemicalComponent } from './industri/chemical/chemical.component';
import { ConsumerComponent } from './industri/consumer/consumer.component';
import { HealthcareComponent } from './industri/healthcare/healthcare.component';
import { EnergyComponent } from './industri/energy/energy.component';
import { ElectronicsComponent } from './industri/electronics/electronics.component';
import { AgricultureComponent } from './industri/agriculture/agriculture.component';
import { FoodComponent } from './industri/food/food.component';
import { IndiaComponent } from './country_box/india/india.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { SecondFormComponent } from './second-form/second-form.component';
import { SecondRdPageComponent } from './second-rd-page/second-rd-page.component';
import { ThirdFormComponent } from './third-form/third-form.component';
import { ThirdRdComponent } from './third-rd/third-rd.component';
import { ReadInfographicsComponent } from './read-infographics/read-infographics.component';
import { InfograpgFormComponent } from './infograpg-form/infograpg-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'read_more/:id', component: HomeReadMoreComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Growth', component: GrowthMatrixComponent },
  { path: 'Research-Services', component: ResearchServicesComponent },
  { path: 'fdi-solutions', component: FdiSolutionsComponent },
  { path: 'exclusive-services', component: ExclusiveServicesComponent },
  { path: 'survey-reports', component: SurveyReportsComponent},
  { path: 'portfolio-reports', component:PortfolioReportsComponent},
  { path: 'infographics', component:InfographicsComponent},
  { path: 'industries', component:IndustriesComponent},
  { path: 'country_reports/:id', component:CountryReportsComponent},
  { path: 'contact', component:ContactUsComponent},
  { path: 'press', component:PressReleasesComponent},
  { path: 'privacy', component:PrivacyPolicyComponent},
  { path: 'article/:id', component:ArticlePageComponent},
  { path: 'portal', component:UniPortalComponent},
  { path: 'refund', component:RefundCancellationPolicyComponent},
  { path: 'terms', component:TermsConditionComponent},
  { path: 'form_inq/:id/:reqid', component:FormComponent},
  { path: 'automotive', component:AutomotiveComponent},
  { path: 'chemical', component:ChemicalComponent},
  { path: 'consumer', component:ConsumerComponent},
  { path: 'food', component:FoodComponent},
  { path: 'agricultuer', component:AgricultureComponent},
  { path: 'electronics', component:ElectronicsComponent},
  { path: 'energy', component:EnergyComponent},
  { path: 'healthcare', component:HealthcareComponent},
  { path: 'india/:id', component:IndiaComponent},  
  { path: 'thanks', component:ThankyouComponent},  
  { path: 'form_inq_2/:id/:reqid', component:SecondFormComponent},
  { path: 'second_re/:id', component: SecondRdPageComponent },
  { path: 'form_inq_3/:id/:reqid', component:ThirdFormComponent},
  { path: 'third_rd/:id', component: ThirdRdComponent },
  { path: 'read_infographics/:id', component: ReadInfographicsComponent },
  { path: 'form_inq_4/:id/:reqid', component:InfograpgFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
