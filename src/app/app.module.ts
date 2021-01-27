import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
    declarations: [AppComponent, CoursesComponent, ContactFormComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [CoursesService],
    bootstrap: [AppComponent],
})
export class AppModule {}
